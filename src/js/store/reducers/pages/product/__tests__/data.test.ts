import {ProductInterface} from '../../../../../types/models'
import {
    LoadProductStartedActionInterface,
    LoadProductSuccessActionInterface,
} from '../../../../../types/actions'
import T from '../../../../actions/actionTypes'
import data from '../data'

describe('Тестирование загрузки данных продукта', () => {
    const product: ProductInterface = {
        id: 0,
        imgLink: 'google.com',
        translit: '',
        name: 'Product Name',
    }

    test('Обнуление предыдущего, загруженного продукта ', () => {
        const state: ProductInterface = product,
            action: LoadProductStartedActionInterface = {
                type: T.LOAD_PRODUCT_STARTED,
            }
        expect(data(state, action)).toEqual(null)
    })

    test('Добавление продукта при успешной загрузке', () => {
        const state: ProductInterface = null,
            action: LoadProductSuccessActionInterface = {
                type: T.LOAD_PRODUCT_SUCCESS,
                product,
            }
        expect(data(state, action)).toEqual(product)
    })
})
