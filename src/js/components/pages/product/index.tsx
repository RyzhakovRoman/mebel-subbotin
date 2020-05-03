import * as React from 'react'
import {ReactElement, useEffect, useState} from 'react'
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
import {products} from '../../../models/products'
import getCategories from '../../../helpers/get-categories'
import getCost from '../../../helpers/for-product-cost/get-cost'
import CategoryInterface from '../../../types/models/category-interface'
import ProductCategories from './categories'
import getAssocListOfProductProperties from '../../../helpers/get-assoc-list-of-product-properties'
import Properties from './properties'
import {addProductToCart} from '../../../store/actions/actionCreators/cart'
import findProductById from '../../../helpers/search-in-models/find-product-by-id'
import AssocListOfProductPropertiesByTypeInterface from '../../../types/render/assoc-list-of-product-properties-by-type-interface'
import ProductConfigurationInterface, {
    AssocListOfSelectedPropertyInterface,
} from '../../../types/render/product-configuration-interface'

const fakeImages = [
        'http://localhost:8080/dist/src/img/main-banner/5499b595352f2a0022878fa026fd5413.jpg',
        'http://localhost:8080/dist/src/img/main-banner/5499b595352f2a0022878fa026fd5413.jpg',
        'http://localhost:8080/dist/src/img/main-banner/5499b595352f2a0022878fa026fd5413.jpg',
        'http://localhost:8080/dist/src/img/main-banner/5499b595352f2a0022878fa026fd5413.jpg',
    ],
    fakeTabs: TabInterface[] = [
        {
            id: 0,
            name: 'Описание',
            panel: <div>Панель описания</div>,
        },
        {
            id: 1,
            name: 'Отзывы',
            panel: <div>Панель отзывов</div>,
        },
    ]

export default function Product(): ReactElement {
    const {id} = useParams(),
        dispatch = useDispatch(),
        [product, setProduct] = useState<ProductInterface>(),
        [categories, setCategories] = useState<CategoryInterface[]>([]),
        [
            productProperties,
            setProductProperties,
        ] = useState<AssocListOfProductPropertiesByTypeInterface>(null),
        [
            selectedProperties,
            setSelectedProperties,
        ] = useState<AssocListOfSelectedPropertyInterface>({})

    useEffect(() => {
        const product = findProductById(+id)
        setProduct(product)
        setCategories(getCategories(product))
        setProductProperties(getAssocListOfProductProperties(product))
    }, [id])

    if (product === undefined) return null

    console.log('selectedProperties ', selectedProperties)

    const costFormatted: number = getCost(product.cost, selectedProperties)

    return (
        <Container>
            <Row gutter={56} className={'product'}>
                <Col sm={12}>
                    <ImgPicker images={fakeImages} />
                </Col>
                <Col sm={12}>
                    <h1 className={'product__name'}>{product.name}</h1>
                    <p>Артикул: {product.article}</p>
                    <Cost
                        className={'cost_large product__cost'}
                        cost={costFormatted}
                        canceledCost={product.canceledCost}
                    />
                    <Properties
                        assocList={productProperties}
                        onChangeValue={sp => {
                            console.log('Изменение выбраных свойств')
                            setSelectedProperties(sp)
                        }}
                    />
                    <ProductCategories categories={categories} />
                    <Button
                        className={'button_primary button_large'}
                        text={'Добавить в корзину'}
                        onClick={() => {
                            console.log('Добавить в корзину')
                            const productConfiguration: ProductConfigurationInterface = {
                                ...product,
                                assocListOfSelectedProperty: selectedProperties,
                                amount: 1,
                            }
                            dispatch(addProductToCart(productConfiguration))
                        }}
                    />
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
