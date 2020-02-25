import T from '../actionTypes'
import {ProductInterface} from '../../../types/models'
import {
    LoadProductErrorActionInterface,
    LoadProductStartedActionInterface,
    LoadProductSuccessActionInterface,
} from '../../../types/actions'

export function loadProductStarted(): LoadProductStartedActionInterface {
    return {
        type: T.LOAD_PRODUCT_STARTED,
    }
}

export function loadProductSuccess(
    product: ProductInterface
): LoadProductSuccessActionInterface {
    return {
        type: T.LOAD_PRODUCT_SUCCESS,
        product,
    }
}

export function loadProductError(): LoadProductErrorActionInterface {
    return {
        type: T.LOAD_PRODUCT_ERROR,
    }
}
