import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
// @ts-ignore
import fetchMock from 'fetch-mock'
import {getProduct, getProducts} from './index'
import T from '../actionTypes'

const middlewares = [thunk],
    mockStore = configureMockStore(middlewares)

/*
 todo - Добавить тестирование запроса с ошибкой
  и переобозвать наименования тестов
*/

describe('Асинхронные действия', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    const headers = {'content-type': 'application/json'}

    describe('Загрузка списка продукции', () => {
        const matcher = 'http://5e497669728fde0014e351a9.mockapi.io/products'

        test('Создание и отправка действий, при успешном запросе', () => {
            fetchMock.getOnce(matcher, {
                body: ['do something'],
                headers,
            })
            const expectedActions = [
                    {type: T.LOAD_PRODUCTS_STARTED},
                    {type: T.LOAD_PRODUCTS_SUCCESS, products: ['do something']},
                ],
                store = mockStore({list: []})

            return store.dispatch(getProducts('krovaty')).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        })

        test('Создание и отправка действий, при ошибке в запросе', () => {
            fetchMock.getOnce(matcher, {
                status: 400,
                headers,
            })
            const expectedActions = [
                    {type: T.LOAD_PRODUCTS_STARTED},
                    {type: T.LOAD_PRODUCTS_ERROR},
                ],
                store = mockStore({list: []})

            return store.dispatch(getProducts('krovaty')).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        })
    })

    describe('Загрузка одного продукта', () => {
        const matcher = 'http://5e497669728fde0014e351a9.mockapi.io/products/1'

        test('Создание и отправка действий, при успешном запросе', () => {
            const product = {name: 'Product Name'}
            fetchMock.getOnce(matcher, {
                body: product,
                headers,
            })
            // eslint-disable-next-line one-var
            const expectedActions = [
                    {type: T.LOAD_PRODUCT_STARTED},
                    {type: T.LOAD_PRODUCT_SUCCESS, product},
                ],
                store = mockStore({product: null})

            return store.dispatch(getProduct('1')).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        })

        test('Создание и отправка действий, при ошибке в запросе', () => {
            fetchMock.getOnce(matcher, {
                status: 400,
                headers,
            })
            const expectedActions = [
                    {type: T.LOAD_PRODUCT_STARTED},
                    {type: T.LOAD_PRODUCT_ERROR},
                ],
                store = mockStore({product: null})

            return store.dispatch(getProduct('1')).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        })
    })
})
