import {ProductInterface} from '../../../types/models'
import {
    AddProductToBasketActionInterface,
    DeleteProductFromBasketActionInterface,
} from '../../../types/actions'
import T from '../actionTypes'

export function addProductToBasket(
    product: ProductInterface
): AddProductToBasketActionInterface {
    return {
        type: T.ADD_PRODUCT_TO_BASKET,
        product,
    }
}

export function deleteProductFromBasket(
    productId: string
): DeleteProductFromBasketActionInterface {
    return {
        type: T.DELETE_PRODUCT_FROM_BASKET,
        productId,
    }
}
