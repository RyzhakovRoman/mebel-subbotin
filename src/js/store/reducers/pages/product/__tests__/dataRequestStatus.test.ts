import {
    LoadProductStartedActionInterface,
    LoadProductSuccessActionInterface,
    LoadProductErrorActionInterface,
} from '../../../../../types/actions'
import T from '../../../../actions/actionTypes'
import dataRequestStatus, {initialState} from '../dataRequestStatus'

describe('Тестирование статуса загрузки данных продукта', () => {
    test('Проставление статуса начала загрузки', () => {
        const action: LoadProductStartedActionInterface = {
            type: T.LOAD_PRODUCT_STARTED,
        }
        expect(dataRequestStatus(initialState, action)).toEqual('started')
    })

    test('Проставление статуса успешного окончания загрузки', () => {
        const action: LoadProductSuccessActionInterface = {
            type: T.LOAD_PRODUCT_SUCCESS,
            product: null,
        }
        expect(dataRequestStatus(initialState, action)).toEqual('success')
    })

    test('Проставление статуса окончания загрузки с ошибкой', () => {
        const action: LoadProductErrorActionInterface = {
            type: T.LOAD_PRODUCT_ERROR,
        }
        expect(dataRequestStatus(initialState, action)).toEqual('error')
    })
})
