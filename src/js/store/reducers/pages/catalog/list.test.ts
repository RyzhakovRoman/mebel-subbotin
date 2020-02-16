import list from './list'
import T from '../../../actions/actionTypes/index'
import {
    LoadMoreProductsSuccessActionInterface,
    LoadProductsStartedActionInterface,
    LoadProductsSuccessActionInterface,
} from '../../../types/actions'
import {ProductBriefInterface} from '../../../types/models'
import products from '../../../../server-fake-data/products'

test('Обнуление списка продуктов в начале загрузки', () => {
    const state: ProductBriefInterface[] = products,
        action: LoadProductsStartedActionInterface = {
            type: T.LOAD_PRODUCTS_STARTED,
        }
    expect(list(state, action)).toEqual([])
})

test('Добавление списка продуктов при успешной загрузке', () => {
    const state: ProductBriefInterface[] = [],
        action: LoadProductsSuccessActionInterface = {
            type: T.LOAD_PRODUCTS_SUCCESS,
            products,
        }
    expect(list(state, action)).toEqual(products)
})

test('Добавление списка продуктов к уже загруженным', () => {
    const state: ProductBriefInterface[] = products,
        action: LoadMoreProductsSuccessActionInterface = {
            type: T.LOAD_MORE_PRODUCTS_SUCCESS,
            products,
        }
    expect(list(state, action)).toEqual([...products, ...products])
})
