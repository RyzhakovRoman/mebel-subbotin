import T from '../actionTypes'
import {ProductInterface} from '../../types/models'
import {
    LoadProductsErrorActionInterface,
    LoadProductsStartedActionInterface,
    LoadProductsSuccessActionInterface
} from '../../types/actions'


export function loadProductsStarted(): LoadProductsStartedActionInterface {
    return {
        type: T.LOAD_PRODUCTS_STARTED,
    }
}

export function loadProductsSuccess(products: ProductInterface[]): LoadProductsSuccessActionInterface {
    return {
        type: T.LOAD_PRODUCTS_SUCCESS,
        products
    }
}

export function loadProductsError(): LoadProductsErrorActionInterface {
    return {
        type: T.LOAD_PRODUCTS_ERROR,
    }
}