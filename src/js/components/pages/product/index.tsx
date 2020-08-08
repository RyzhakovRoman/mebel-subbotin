import * as React from 'react'
import {ReactElement, useCallback, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import Container from '../../layout/container'
import ImgPicker from '../../kit/img-picker'
import Button from '../../kit/button'
import {Cost} from '../../kit/cost'
import {TabInterface, Tabs} from '../../kit/tabs'
import './index.less'
import ProductInterface from '../../../types/models/product-interface'
import findCategoriesByProduct from '../../../helpers/find/find-categories-by-product'
import getCost from '../../../helpers/for-product-cost/get-cost'
import CategoryInterface, {
    MapOfCategoryType,
} from '../../../types/models/category-interface'
import ProductCategories from './categories'
import Properties from './properties'
import {addProductToCart} from '../../../store/actions/actionCreators/cart'
import findProductById from '../../../helpers/find/find-product-by-id'
import ProductConfigurationInterface, {
    MapOfSelectedPropertyInfoType,
} from '../../../types/render/product-configuration-interface'
import getProductProperties from '../../../helpers/get-product-properties'
import {
    AssocListOfSelectedPropertyInterface,
    MapOfProductPropertyType,
} from '../../../types'
import ColorInterface from '../../../types/models/color-interface'
import {COLOR_PROPERTY_NAME, COLOR_PROPERTY_TYPE} from '../../constants'
import AddButton from './add-button'
import BreadCrumbs, {RouteInfo} from '../../layout/bread-crumbs'
import {R} from '../../../navigation/routes'

const fakeImages = [
        'http://localhost:8080/dist/src/img/main-banner/5499b595352f2a0022878fa026fd5413.jpg',
        'http://localhost:8080/dist/src/img/products/1/2.jpg',
        'http://localhost:8080/dist/src/img/products/1/1.jpg',
        'http://localhost:8080/dist/src/img/products/1/3.webp',
    ],
    fakeTabs: TabInterface[] = [
        {
            id: 0,
            name: 'Описание',
            panel: <div>Описание отсутствует</div>,
        },
        {
            id: 1,
            name: 'Отзывы',
            panel: <div>Отзывов нет</div>,
        },
    ],
    getListOfRoute = (
        categories: MapOfCategoryType,
        product: ProductInterface,
        productId: string
    ): RouteInfo[] => {
        const listOfRoute: RouteInfo[] = []
        let category: CategoryInterface, subcategory: CategoryInterface

        for (const categoryInfo of categories.values()) {
            // Если это основная категория товара
            if (categoryInfo.parentCategoryId === null) category = categoryInfo
            else subcategory = categoryInfo
        }

        listOfRoute.push(
            {
                to: R.CATALOG,
                name: 'Каталог мебели',
            },
            {
                to: `${R.CATALOG}/${category.translit}`,
                name: category.h1,
            }
        )

        if (subcategory !== undefined)
            listOfRoute.push({
                to: `${R.CATALOG}/${category.translit}/${subcategory.translit}`,
                name: subcategory.nameForLink,
            })

        listOfRoute.push({
            to: `${R.CATALOG}/product-${productId}`,
            name: product.name,
        })

        return listOfRoute
    }

export default function Product(): ReactElement {
    const {id: productId} = useParams(),
        dispatch = useDispatch(),
        [product, setProduct] = useState<ProductInterface>(),
        [categories, setCategories] = useState<MapOfCategoryType>(),
        [
            productProperties,
            setProductProperties,
        ] = useState<MapOfProductPropertyType>(null),
        [
            selectedProperties,
            setSelectedProperties,
        ] = useState<AssocListOfSelectedPropertyInterface>({}),
        [
            selectedColorProperty,
            setSelectedColorProperty,
        ] = useState<ColorInterface>()
    // [totalCost, setTotalCost] = useState()

    useEffect(() => {
        const product = findProductById(+productId)
        setProduct(product)
        setCategories(findCategoriesByProduct(product))
        setProductProperties(getProductProperties(+productId))
    }, [productId])

    const handleAddToCart = useCallback(() => {
        console.log('Добавить в корзину ')

        const mapOfSelectedPropertyInfo: MapOfSelectedPropertyInfoType = new Map(),
            costBasedOnProperties = getCost(
                product.cost,
                productProperties,
                selectedProperties,
                selectedColorProperty
            )

        for (const propertyTypeId in selectedProperties) {
            const productPropertyValue = selectedProperties[propertyTypeId],
                property = productProperties.get(+propertyTypeId)

            mapOfSelectedPropertyInfo.set(+propertyTypeId, {
                propertyValueValue: property.values.get(productPropertyValue)
                    .value,
                propertyTypeName: property.name,
                propertyTypeType: productProperties.get(+propertyTypeId).type,
            })
        }

        console.log('selectedProperties ', mapOfSelectedPropertyInfo.values())

        mapOfSelectedPropertyInfo.set(COLOR_PROPERTY_TYPE, {
            propertyValueValue: selectedColorProperty,
            propertyTypeName: COLOR_PROPERTY_NAME,
            propertyTypeType: COLOR_PROPERTY_TYPE,
        })

        const productConfiguration: ProductConfigurationInterface = {
            ...product,
            productId: +productId,
            selectedProperties: mapOfSelectedPropertyInfo,
            costBasedOnProperties,
            amount: 1,
        }

        dispatch(addProductToCart(productConfiguration))
    }, [product, productProperties, selectedProperties, selectedColorProperty])

    if (product === undefined) return null

    // console.log('selectedProperties ', selectedProperties)

    const totalCost: number = getCost(
        product.cost,
        productProperties,
        selectedProperties,
        selectedColorProperty
    )
    const listOfRoute = getListOfRoute(categories, product, productId)

    // todo - product.canceledCost тоже зависит от выбранных опций

    return (
        <Container>
            <BreadCrumbs listOfRoutes={listOfRoute} />

            <Row gutter={{sm: 32, xl: 80}} className={'product'}>
                <Col xs={24} sm={24} md={14} lg={12}>
                    <ImgPicker images={fakeImages} />
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={10}
                    lg={12}
                    className={'product__properties'}
                >
                    <h1 className={'product__name'}>
                        {product.name}
                        <span className={'product__article'}>
                            Артикул: {product.article}
                        </span>
                    </h1>

                    <Cost
                        className={'cost_large product__cost'}
                        cost={totalCost}
                        canceledCost={product.canceledCost}
                    />
                    <Properties
                        productProperties={productProperties}
                        onChangeValue={value => {
                            // console.log('Изменение выбраных свойств')
                            setSelectedProperties(value)
                        }}
                        onColorChange={setSelectedColorProperty}
                    />
                    <ProductCategories categories={categories} />
                    <div>
                        <AddButton onAddClick={handleAddToCart} />
                    </div>
                    {/* todo - Сделать кнопку, что уже в корзине, перейти в корзину */}
                </Col>
                <Col sm={20}>
                    <Tabs
                        className={'product__tabs'}
                        tabs={fakeTabs}
                        defaultActiveId={0}
                    />
                </Col>
            </Row>
            <div style={{width: 100, height: 100}} />
        </Container>
    )
}
/*
<div className={'product__short-desc'}>
    <p>Краткое описание</p>
    <p>
        Может быть тут будет какое то примечяние <br /> даже
        возможно на пару строчек
    </p>
</div>

 */
