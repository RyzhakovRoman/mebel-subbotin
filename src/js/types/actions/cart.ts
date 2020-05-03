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

type CartActionType =
    | AddProductToCartActionInterface
    | DeleteProductFromCartActionInterface

export default CartActionType
