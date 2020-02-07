import * as React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootStateType} from '../../../../store/reducers'
import {getProducts} from '../../../../store/actions/actionCreatorsForRequest'


export default function Catalog() {
    return (
        <div>
            <h2>Каталог домашняя</h2>
            <Comp/>
        </div>
    )
}

function Comp() {
    const
        products = useSelector((state: RootStateType) => state.pages.catalog.beds.list),
        dispatch = useDispatch()

    return (
        <div>
            <span>products: {products.map(({name}) => name)}</span>
            <button
                onClick={() => dispatch(getProducts)}
            >
                Загрузить
            </button>
        </div>
    )
}

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