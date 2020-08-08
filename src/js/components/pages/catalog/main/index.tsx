import {ReactElement, useEffect, useState} from 'react'
import * as React from 'react'
import {useParams} from 'react-router-dom'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import Container from '../../../layout/container'
import Subcategories from '../../../kit/subcategories'
import ProductCard from '../../../kit/product-card'
import Sorting from '../sorting'
import findCategoryByTranslit from '../../../../helpers/find/find-category-by-translit'
import sortProducts from '../../../../helpers/sort-products'
import {MapOfProductType} from '../../../../types/models/product-interface'
import {SortingType} from '../../../../types'
import getProductsByCategoryId from '../../../../helpers/get-products-by-category-id'
import BreadCrumbs, {RouteInfo} from '../../../layout/bread-crumbs'
import CategoryInterface from '../../../../types/models/category-interface'
import {R} from '../../../../navigation/routes'
import {PercentageOutlined, SoundOutlined} from '@ant-design/icons/lib'
import './index.less'

const getImgForCategory = (category: CategoryInterface): string => {
        if (category.translit === 'krovati')
            return '/src/img/products/fake/krovat.jpg'
        if (category.translit === 'stoly')
            return '/src/img/products/fake/stol.jpg'
        if (category.translit === 'stulya')
            return '/src/img/products/fake/stul.jpg'
        if (category.translit === 'shkafy')
            return '/src/img/products/fake/shkaf.jpg'
        if (category.translit === 'tumby')
            return '/src/img/products/fake/komod.jpg'
        if (category.translit === 'komody')
            return '/src/img/products/fake/komod.jpg'
    },
    getListOfRoute = (
        category: CategoryInterface,
        subcategory: CategoryInterface
    ): RouteInfo[] => {
        const listOfRoute: RouteInfo[] = [
            {
                to: R.CATALOG,
                name: 'Каталог мебели',
            },
        ]

        if (category !== null)
            listOfRoute.push({
                to: `${R.CATALOG}/${category.translit}`,
                name: category.h1,
            })

        if (category !== null && subcategory !== null)
            listOfRoute.push({
                to: `${R.CATALOG}/${category.translit}/${subcategory.translit}`,
                name: subcategory.h1,
            })

        return listOfRoute
    }

export default function Catalog(): ReactElement {
    const // Берем из параметров транслит категории и транслит подкатегории
        {
            category: categoryTranslit,
            subcategory: subcategoryTranslit,
        } = useParams(),
        [products, setProducts] = useState<MapOfProductType>(new Map()),
        [sortingCost, setSortingCost] = useState<SortingType>(''),
        // Определяем категорию по categoryTranslit
        [categoryId, category] = findCategoryByTranslit(categoryTranslit),
        [subcategoryId, subcategory] = findCategoryByTranslit(
            subcategoryTranslit
        )

    // console.log('Catalog.params ', categoryTranslit, subcategoryTranslit)
    console.log('Catalog.categories ', category, subcategory)

    useEffect(() => {
        // todo - ни разу не правильная функция
        const sorting = {
                cost: sortingCost,
            },
            categoryIdForFilter =
                subcategoryId !== null ? subcategoryId : categoryId,
            filteredProducts = getProductsByCategoryId(categoryIdForFilter),
            sortedProducts = sortProducts(filteredProducts, sorting)

        console.log('filteredProducts ', filteredProducts)

        setProducts(sortedProducts)
    }, [category, subcategory, sortingCost])

    const heading = subcategory !== null ? subcategory.h1 : category.h1,
        productCards = [],
        img = getImgForCategory(category),
        listOfRoute = getListOfRoute(category, subcategory)

    for (const [productId, product] of products.entries()) {
        productCards.push(
            <Col xs={24} sm={12} lg={8} key={productId}>
                <ProductCard productInfo={[productId, product]} imgSrc={img} />
            </Col>
        )
    }

    return (
        <div>
            <Container>
                <BreadCrumbs listOfRoutes={listOfRoute} />

                <h1 className={'heading heading_1'}>{heading}</h1>

                <Row gutter={{sm: 24, xl: 56}}>
                    <Col xs={{order: 2}} sm={{order: 1, span: 18}}>
                        <Sorting
                            sortingCost={sortingCost}
                            onChangeSortingCost={setSortingCost}
                        />
                        <br />
                        <br />
                        <Row
                            gutter={[
                                {sm: 16, xl: 24},
                                {xs: 38, sm: 38, xl: 64},
                            ]}
                        >
                            {productCards}
                        </Row>
                    </Col>
                    <Col xs={{order: 1}} sm={{order: 2, span: 6}}>
                        <Subcategories
                            categoryInfo={[categoryId, category]}
                            className={'catalog-main__subcategories'}
                        />
                        <div style={{marginTop: '1rem', padding: '.25rem'}}>
                            <h3>
                                <PercentageOutlined
                                    style={{color: '#f9be10'}}
                                />{' '}
                                У нас Акция!
                            </h3>
                            <p>
                                Сфотографируйте изделие после установки и мы
                                вернем Вам <b>500 рублей</b> обратно!
                            </p>
                        </div>
                        <div style={{marginTop: '1rem', padding: '.25rem'}}>
                            <h3>
                                <SoundOutlined style={{color: '#f9be10'}} />{' '}
                                Обратите внимание!
                            </h3>
                            <p>
                                У нас нет отмененной цены на каждом товаре! Цены
                                на нашем сайте ниже средних!
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
