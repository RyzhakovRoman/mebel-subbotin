/*
    Корзина
 */

import T from '../../store/actions/actionTypes'
import ProductConfigurationInterface from '../render/product-configuration-interface'

export interface AddProductToCartActionInterface {
    type: T.ADD_PRODUCT_TO_CART;
    productConfiguration: ProductConfigurationInterface;
}

export interface DeleteProductFromCartActionInterface {
    type: T.DELETE_PRODUCT_FROM_CART;
    productConfigurationId: number;
}

export interface ReduceAmountProductInCartActionInterface {
    type: T.REDUCE_AMOUNT_PRODUCT_IN_CART;
    productConfigurationId: number;
}

type CartActionType =
    | AddProductToCartActionInterface
    | DeleteProductFromCartActionInterface
    | ReduceAmountProductInCartActionInterface

export default CartActionType
