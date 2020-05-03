import {ReactElement, useEffect, useState} from 'react'
import * as React from 'react'
import {useParams} from 'react-router-dom'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import Button from '../../../kit/button'
import Container from '../../../layout/container'
import Subcategories from '../../../kit/subcategories'
import ProductCard from '../../../kit/product-card'
import {Range} from '../../../kit/range'
import Sorting from '../sorting'
import {getCategoryByTranslit} from '../../../../helpers/get-category-by-translit'
import {getProducts} from '../../../../helpers/get-products'
import {ProductInterface} from '../../../../types/models/product-interface'
import {SortingType} from '../../../../types'

export default function Catalog(): ReactElement {
    const // Берем из параметров транслит категории и транслит подкатегории
        {
            category: categoryTranslit,
            subcategory: subcategoryTranslit,
        } = useParams(),
        [products, setProducts] = useState<ProductInterface[]>([]),
        // Определяем категорию по categoryTranslit
        category = getCategoryByTranslit(categoryTranslit),
        subcategory = getCategoryByTranslit(subcategoryTranslit),
        heading = subcategory !== undefined ? subcategory.h1 : category.h1,
        [sortingCost, setSortingCost] = useState<SortingType>('')

    console.log('Catalog.params ', categoryTranslit, subcategoryTranslit)
    console.log('Catalog.categories ', category, subcategory)

    //     pagination: PaginationInterface = {
    //         start: products.length,
    //         limit: 10,
    //     }

    useEffect(() => {
        const products = getProducts(
            subcategory !== undefined ? subcategory : category,
            {
                cost: sortingCost,
            }
        )
        setProducts(products)
    }, [category, subcategory, sortingCost])

    return (
        <div>
            <Container>
                <h1 className={'heading heading_1'}>{heading}</h1>
                <Row gutter={56}>
                    <Col sm={18}>
                        <Sorting
                            sortingCost={sortingCost}
                            onChangeSortingCost={setSortingCost}
                        />
                        <br />
                        <br />
                        <Row gutter={[24, 64]} type={'flex'}>
                            {products.map(product => (
                                <Col sm={8} key={product.id}>
                                    <ProductCard product={product} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col sm={6}>
                        <Subcategories />
                        {/*<Range />*/}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

// {/*<Col*/}
// {/*    sm={24}*/}
// {/*    key={'btn'}*/}
// {/*    style={{textAlign: 'center'}}*/}
// {/*>*/}
// {/*    <Button*/}
// {/*        text={'Загрузить еще'}*/}
// {/*        onClick={() => {*/}
// {/*            console.log('Загрузить еще')*/}
// {/*        }}*/}
// {/*    />*/}
// {/*</Col>*/}
