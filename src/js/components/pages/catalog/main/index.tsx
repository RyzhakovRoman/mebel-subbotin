import {ReactElement, useEffect} from 'react'
import * as React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import {RootStateType} from '../../../../store/reducers'
import {getProducts} from '../../../../store/actions/actionCreatorsForRequest'
import Button from '../../../kit/button'
import Container from '../../../layout/container'
import {PaginationInterface} from '../../../../store/types'
import Subcategories from '../subcategories'
import ProductCard from '../../../kit/product-card'
import CATALOG_CATEGORIES from '../../../../navigation/catalogCategories'

function getHeading(category, subcategory): string {
    const categoryInfo = CATALOG_CATEGORIES[category]
    if (categoryInfo !== undefined) {
        if (subcategory === undefined) return categoryInfo.h1
        else return categoryInfo.subcategories[subcategory].h1
    }
}

// todo - проверять существует ли такая категория и подкатегория

export default function Catalog(): ReactElement {
    const {category, subcategory} = useParams(),
        products = useSelector(
            (state: RootStateType) => state.pages.catalog.list
        ),
        requestStatus = useSelector(
            (state: RootStateType) => state.pages.catalog.listRequestStatus
        ),
        dispatch = useDispatch(),
        pagination: PaginationInterface = {
            start: products.length,
            limit: 10,
        }

    useEffect(() => {
        dispatch(getProducts(category, subcategory))
    }, [category, subcategory])

    return (
        <div>
            <h2>
                Каталог {category} - {subcategory} - Статус: {requestStatus}
            </h2>
            <Container>
                <h1>{getHeading(category, subcategory)}</h1>
                <Row gutter={56}>
                    <Col sm={18}>
                        Перечисление товаров
                        <ul>
                            {products.map(product => (
                                <li key={product.name}>
                                    <ProductCard {...product} />
                                </li>
                            ))}
                        </ul>
                        <Button
                            text={'Загрузить еще'}
                            onClick={() => {
                                dispatch(
                                    getProducts(category, subcategory, {
                                        pagination,
                                    })
                                )
                            }}
                        />
                    </Col>
                    <Col sm={6}>
                        <Subcategories />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

// function Comp(): ReactElement {
//     const {category} = useParams(),
//         products = useSelector(
//             (state: RootStateType) => state.pages.catalog[category].list
//         ),
//         dispatch = useDispatch()
//
//     return (
//         <div>
//             <h2>Категория товаров: {category}</h2>
//             <span>products: {products.map(({name}) => name)}</span>
//             <Button text={'Загрузить'} onClick={() => dispatch(getProducts)} />
//         </div>
//     )
// }

// const Cont = connect(
//     (state: RootStateType) => {
//         console.log(state)
//         return ({
//         products: state.pages.catalog.beds.list
//     })},
//     dispatch => ({
//         loadProductsSuccess: () => dispatch(loadProductsSuccess(
//             [
//                 {id: 0, name: 'some name'},
//                 {id: 1, name: 'some name 2'}
//             ]
//         )
//         )
//     })
// )(Comp)
