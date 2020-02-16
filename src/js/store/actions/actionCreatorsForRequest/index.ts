import {
    // loadMoreProductsSuccess,
    loadProductsStarted,
    loadProductsSuccess,
} from '../actionCreators/products'
// import products from '../../../server-fake-data/products'
import {PaginationInterface} from '../../types'
import {ProductBriefInterface} from '../../types/models'

const defaultFilters = {
    pagination: {
        start: 0,
        limit: 10,
    },
}

interface FiltersInterface {
    pagination: PaginationInterface;
}

// eslint-disable-next-line one-var
export const getProducts = (
    category: string,
    subcategory: string = '',
    filters: FiltersInterface = defaultFilters
): any => {
    console.log(subcategory)
    return async dispatch => {
        console.log('getProducts ', category, subcategory, filters)
        dispatch(loadProductsStarted())
        return fetch('http://5e497669728fde0014e351a9.mockapi.io/products', {
            method: 'GET',
        })
            .then(async response => response.json())
            .then((data: ProductBriefInterface[]) => {
                dispatch(loadProductsSuccess(data))
            })
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
