import T from '../actions/actionTypes'
import {ProductBriefInterface} from './models'

// todo - Написать дренериками тип категории
export interface LoadProductsStartedActionInterface {
    type: T.LOAD_PRODUCTS_STARTED;
}

export interface LoadProductsSuccessActionInterface {
    type: T.LOAD_PRODUCTS_SUCCESS;
    products: ProductBriefInterface[];
}
export interface LoadMoreProductsSuccessActionInterface {
    type: T.LOAD_MORE_PRODUCTS_SUCCESS;
    products: ProductBriefInterface[];
}

export interface LoadProductsErrorActionInterface {
    type: T.LOAD_PRODUCTS_ERROR;
}

export type LoadProductsActionType =
    | LoadProductsStartedActionInterface
    | LoadProductsSuccessActionInterface
    | LoadMoreProductsSuccessActionInterface
    | LoadProductsErrorActionInterface
