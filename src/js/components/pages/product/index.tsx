import * as React from 'react'
import {ReactElement, useEffect} from 'react'
import {useParams} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../../store/reducers'
import {getProduct} from '../../../store/actions/actionCreatorsForRequest'

export default function Product(): ReactElement {
    const {id} = useParams(),
        {data: product, dataRequestStatus} = useSelector(
            (state: RootStateType) => state.pages.product
        ),
        dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct(id))
    }, [id])

    return (
        <>
            <h1>Имя продукта</h1>
            <h2>Статус загрузки продукта: {dataRequestStatus}</h2>
            <h2>ID продукта: {product}</h2>
        </>
    )
}
