import T from '../store/actions/actionTypes'
import {ProductBriefInterface, ProductInterface} from './models'

/*
    Загрузка продуктов
 */

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

/*
    Загрузка одного продукта
 */

export interface LoadProductStartedActionInterface {
    type: T.LOAD_PRODUCT_STARTED;
}

export interface LoadProductSuccessActionInterface {
    type: T.LOAD_PRODUCT_SUCCESS;
    product: ProductInterface;
}

export interface LoadProductErrorActionInterface {
    type: T.LOAD_PRODUCT_ERROR;
}

export type LoadProductActionType =
    | LoadProductStartedActionInterface
    | LoadProductSuccessActionInterface
    | LoadProductErrorActionInterface

/*
    Корзина
 */

export interface AddProductToBasketActionInterface {
    type: T.ADD_PRODUCT_TO_BASKET;
    product: ProductInterface;
}

export interface DeleteProductFromBasketActionInterface {
    type: T.DELETE_PRODUCT_FROM_BASKET;
    productId: number;
}

export type BasketActionType =
    | AddProductToBasketActionInterface
    | DeleteProductFromBasketActionInterface
