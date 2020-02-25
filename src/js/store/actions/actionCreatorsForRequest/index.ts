import {
    loadProductsError,
    // loadMoreProductsSuccess,
    loadProductsStarted,
    loadProductsSuccess,
} from '../actionCreators/products'
// import products from '../../../server-fake-data/products'
import {PaginationInterface} from '../../../types'
import {ProductBriefInterface, ProductInterface} from '../../../types/models'
import {
    loadProductError,
    loadProductStarted,
    loadProductSuccess,
} from '../actionCreators/product'
import products from '../../../server-fake-data/products'

const defaultFilters = {
        pagination: {
            start: 0,
            limit: 10,
        },
    },
    DOMEN = 'http://5e497669728fde0014e351a9.mockapi.io'

interface FiltersInterface {
    pagination: PaginationInterface;
}

// eslint-disable-next-line one-var
export const getProducts = (
    category: string,
    subcategory: string = '',
    filters: FiltersInterface = defaultFilters
): any => {
    return async dispatch => {
        console.log('getProducts ', category, subcategory, filters)
        dispatch(loadProductsStarted())
        return fetch(`${DOMEN}/products`, {
            method: 'GET',
        })
            .then(async response => response.json())
            .then((data: ProductBriefInterface[]) => {
                dispatch(loadProductsSuccess(data))
            })
            .catch(() => dispatch(loadProductsError()))
    }
}

// eslint-disable-next-line one-var
export const getProduct = (id: string): any => {
    return async dispatch => {
        dispatch(loadProductStarted())

        dispatch(loadProductSuccess(products[0]))

        // return fetch(`${DOMEN}/products/${id}`, {
        //     method: 'GET',
        // })
        //     .then(async response => response.json())
        //     .then((data: ProductInterface) => {
        //         dispatch(loadProductSuccess(data))
        //     })
        //     .catch(() => dispatch(loadProductError()))
    }
}

// eslint-disable-next-line one-var
// export const getProducts = (
//     category: string,
//     subcategory: string = '',
//     filters: FiltersInterface = defaultFilters
// ) => dispatch => {
//     console.log('getProducts ', category, subcategory, filters)
//     // диспатчим что запрос начался
//     dispatch(loadProductsStarted())
//
//     setTimeout(() => {
//         // Делаем запрос относительно категории
//         const {start} = filters.pagination,
//             productsForCategory: ProductBriefInterface[] = products.map(p => ({
//                 id: start + p.id,
//                 name: p.name + category + ' ' + subcategory + start.toString(),
//                 imgLink: p.imgLink,
//             }))
//
//         if (start > 0) {
//             dispatch(loadMoreProductsSuccess(productsForCategory))
//             return
//         }
//
//         dispatch(loadProductsSuccess(productsForCategory))
//     }, 2000)
// }
