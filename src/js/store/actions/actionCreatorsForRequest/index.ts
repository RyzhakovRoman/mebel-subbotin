import {
    loadProductsStarted,
    loadProductsSuccess,
} from '../actionCreators/products'
import {productsBeds as products} from '../../../models/products/products-beds'
import {PaginationInterface} from '../../../types'
import {loadProductStarted, loadProductSuccess} from '../actionCreators/product'

const defaultFilters: FiltersInterface = {
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
    categoryTranslit: string,
    subcategoryTranslit: string = '',
    filters: FiltersInterface = defaultFilters
): any => {
    return dispatch => {
        console.log('getProducts ', categoryTranslit, filters)
        dispatch(loadProductsStarted())
        // Ищем категорию по translit
        // const category = getCategoryByTranslit(categoryTranslit),
        // Ищем подкатегорию по translit
        // subcategory = getCategoryByTranslit(subcategoryTranslit)
        // Берем продукты нужно категории
        // Если есть id подкатегории то выбираем продукты этой подкатегории
        // Иначе выбираем все продукты основной категории
        dispatch(loadProductsSuccess(products))
        // return fetch(`${DOMEN}/products`, {
        //     method: 'GET',
        // })
        //     .then(async response => response.json())
        //     .then((data: ProductBriefInterface[]) => {
        //         dispatch(loadProductsSuccess(data))
        //     })
        //     .catch(() => dispatch(loadProductsError()))
    }
}

// eslint-disable-next-line one-var
export const getProduct = (id: string): any => {
    // eslint-disable-next-line @typescript-eslint/require-await
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
