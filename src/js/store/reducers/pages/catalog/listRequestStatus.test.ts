import listRequestStatus, {initialState} from './listRequestStatus'
import {
    LoadMoreProductsSuccessActionInterface,
    LoadProductsErrorActionInterface,
    LoadProductsStartedActionInterface,
    LoadProductsSuccessActionInterface,
} from '../../../types/actions'
import T from '../../../actions/actionTypes'

test('Проставление статуса начала загрузки продукции', () => {
    const action: LoadProductsStartedActionInterface = {
        type: T.LOAD_PRODUCTS_STARTED,
    }
    expect(listRequestStatus(initialState, action)).toEqual('started')
})

test('Проставление статуса успешного окончания загрузки продукции', () => {
    const action: LoadProductsSuccessActionInterface = {
        type: T.LOAD_PRODUCTS_SUCCESS,
        products: [],
    }
    expect(listRequestStatus(initialState, action)).toEqual('success')
})

test('Проставление статуса окончания загрузки продукции с ошибкой', () => {
    const action: LoadProductsErrorActionInterface = {
        type: T.LOAD_PRODUCTS_ERROR,
    }
    expect(listRequestStatus(initialState, action)).toEqual('error')
})

test('Проставление статуса успешного окончания подгрузки продукции', () => {
    const action: LoadMoreProductsSuccessActionInterface = {
        type: T.LOAD_MORE_PRODUCTS_SUCCESS,
        products: [],
    }
    expect(listRequestStatus(initialState, action)).toEqual('success')
})
