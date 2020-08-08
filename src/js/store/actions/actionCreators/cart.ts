import {
    AddProductToCartActionInterface,
    DeleteProductFromCartActionInterface,
    ReduceAmountProductInCartActionInterface,
} from '../../../types/actions/cart'
import T from '../actionTypes'
import ProductConfigurationInterface from '../../../types/render/product-configuration-interface'

export function addProductToCart(
    productConfiguration: ProductConfigurationInterface
): AddProductToCartActionInterface {
    return {
        type: T.ADD_PRODUCT_TO_CART,
        productConfiguration,
    }
}

export function deleteProductFromCart(
    productConfigurationId: number
): DeleteProductFromCartActionInterface {
    return {
        type: T.DELETE_PRODUCT_FROM_CART,
        productConfigurationId,
    }
}

export function reduceAmountProductInCart(
    productConfigurationId: number
): ReduceAmountProductInCartActionInterface {
    return {
        type: T.REDUCE_AMOUNT_PRODUCT_IN_CART,
        productConfigurationId,
    }
}
