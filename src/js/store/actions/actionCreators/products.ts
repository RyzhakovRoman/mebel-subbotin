import T from '../actionTypes'
import {ProductBriefInterface} from '../../../types/models'
import {
    LoadMoreProductsSuccessActionInterface,
    LoadProductsErrorActionInterface,
    LoadProductsStartedActionInterface,
    LoadProductsSuccessActionInterface,
} from '../../../types/actions'

export function loadProductsStarted(): LoadProductsStartedActionInterface {
    return {
        type: T.LOAD_PRODUCTS_STARTED,
    }
}

export function loadProductsSuccess(
    products: ProductBriefInterface[]
): LoadProductsSuccessActionInterface {
    return {
        type: T.LOAD_PRODUCTS_SUCCESS,
        products,
    }
}

export function loadMoreProductsSuccess(
    products: ProductBriefInterface[]
): LoadMoreProductsSuccessActionInterface {
    return {
        type: T.LOAD_MORE_PRODUCTS_SUCCESS,
        products,
    }
}

export function loadProductsError(): LoadProductsErrorActionInterface {
    return {
        type: T.LOAD_PRODUCTS_ERROR,
    }
}
