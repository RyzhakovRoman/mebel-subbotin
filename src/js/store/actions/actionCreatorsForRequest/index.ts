import {loadProductsStarted, loadProductsSuccess} from '../actionCreators/products'
import products from '../../../server-fake-data/products'


export function getProducts(dispatch) {
    dispatch(loadProductsStarted())

    setTimeout(() => {
        dispatch(loadProductsSuccess(products))
    }, 5000)
}