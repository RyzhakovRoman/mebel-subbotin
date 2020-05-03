import basket from '../index'
import {
    AddProductToBasketActionInterface,
    DeleteProductFromBasketActionInterface,
} from '../../../../types/actions'
import T from '../../../actions/actionTypes'
import products from '../../../../server-fake-data/products'
import {ProductInterface} from '../../../../types/models'

describe('Редуктор корзины', () => {
    test('Должен обработать добавление товара в корзину', () => {
        const prevState: ProductInterface[] = [products[4]],
            action: AddProductToBasketActionInterface = {
                type: T.ADD_PRODUCT_TO_BASKET,
                product: products[0],
            }
        expect(basket(prevState, action)).toEqual([products[4], products[0]])
    })

    test('Должен обработать удаление товара из корзины', () => {
        const prevState = [products[4], products[2]],
            action: DeleteProductFromBasketActionInterface = {
                type: T.DELETE_PRODUCT_FROM_BASKET,
                productId: 2,
            }
        expect(basket(prevState, action)).toEqual([products[4]])
    })
})
