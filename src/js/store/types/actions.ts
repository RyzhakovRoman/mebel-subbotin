import T from '../actions/actionTypes'
import {ProductInterface} from './models'


export interface LoadProductsStartedActionInterface {
    type: T.LOAD_PRODUCTS_STARTED
}

export interface LoadProductsSuccessActionInterface {
    type: T.LOAD_PRODUCTS_SUCCESS
    products: ProductInterface[]
}

export interface LoadProductsErrorActionInterface {
    type: T.LOAD_PRODUCTS_ERROR
}

export type LoadProductsActionType =
    | LoadProductsStartedActionInterface
    | LoadProductsSuccessActionInterface
    | LoadProductsErrorActionInterface