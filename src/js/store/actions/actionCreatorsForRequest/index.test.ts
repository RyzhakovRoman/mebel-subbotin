import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
// @ts-ignore
import fetchMock from 'fetch-mock'
import {getProducts} from './index'
import T from '../actionTypes'

const middlewares = [thunk],
    mockStore = configureMockStore(middlewares)

describe('Асинхронные действия', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    test('Создание и отправка действий, при запросе продукции', () => {
        fetchMock.getOnce(
            'http://5e497669728fde0014e351a9.mockapi.io/products',
            {
                body: ['do something'],
                headers: {'content-type': 'application/json'},
            }
        )
        const expectedActions = [
                {type: T.LOAD_PRODUCTS_STARTED},
                {type: T.LOAD_PRODUCTS_SUCCESS, products: ['do something']},
            ],
            store = mockStore({list: []})

        return store.dispatch(getProducts('krovaty')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
