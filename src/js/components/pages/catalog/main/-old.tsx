// import {ReactElement, useEffect} from 'react'
// import * as React from 'react'
// import {useSelector, useDispatch} from 'react-redux'
// import {useParams} from 'react-router-dom'
// import Row from 'antd/lib/row'
// import 'antd/lib/row/style'
// import Col from 'antd/lib/col'
// import 'antd/lib/col/style'
// import {RootStateType} from '../../../../store/reducers'
// import {getProducts} from '../../../../store/actions/actionCreatorsForRequest'
// import Button from '../../../kit/button'
// import Container from '../../../layout/container'
//
// export default function Catalog(): ReactElement {
//     const {category, subcategory} = useParams(),
//         products = useSelector(
//             (state: RootStateType) => state.pages.catalog[category].list
//         ),
//         requestStatus = useSelector(
//             (state: RootStateType) =>
//                 state.pages.catalog[category].listRequestStatus
//         ),
//         dispatch = useDispatch()
//
//     useEffect(() => {
//         dispatch(getProducts(category, subcategory))
//     }, [category, subcategory])
//
//     return (
//         <div>
//             <h2>
//                 Каталог {category} - {subcategory} - Статус: {requestStatus}
//             </h2>
//             <Container>
//                 <Row gutter={56}>
//                     <Col sm={18}>
//                         Перечисление товаров
//                         <div>products: {products.map(({name}) => name)}</div>
//                         <Button
//                             text={'Загрузить товары'}
//                             onClick={() => {
//                                 console.log('p')
//                                 // dispatch(getProducts(category, subcategory))
//                             }}
//                         />
//                     </Col>
//                     <Col sm={6}>Фильтры</Col>
//                     df dsf
//                 </Row>
//             </Container>
//         </div>
//     )
// }
//
// // function Comp(): ReactElement {
// //     const {category} = useParams(),
// //         products = useSelector(
// //             (state: RootStateType) => state.pages.catalog[category].list
// //         ),
// //         dispatch = useDispatch()
// //
// //     return (
// //         <div>
// //             <h2>Категория товаров: {category}</h2>
// //             <span>products: {products.map(({name}) => name)}</span>
// //             <Button text={'Загрузить'} onClick={() => dispatch(getProducts)} />
// //         </div>
// //     )
// // }
//
// // const Cont = connect(
// //     (state: RootStateType) => {
// //         console.log(state)
// //         return ({
// //         products: state.pages.catalog.beds.list
// //     })},
// //     dispatch => ({
// //         loadProductsSuccess: () => dispatch(loadProductsSuccess(
// //             [
// //                 {id: 0, name: 'some name'},
// //                 {id: 1, name: 'some name 2'}
// //             ]
// //         )
// //         )
// //     })
// // )(Comp)
