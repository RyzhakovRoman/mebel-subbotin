import {
    loadMoreProductsSuccess,
    loadProductsStarted,
    loadProductsSuccess,
} from '../actionCreators/products'
import products from '../../../server-fake-data/products'
import {PaginationInterface} from '../../types'
import {ProductBriefInterface} from '../../types/models'

// export function getProducts(dispatch): void {
//     dispatch(loadProductsStarted())
//
//     setTimeout(() => {
//         dispatch(loadProductsSuccess(products))
//     }, 3000)
// }

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
) => dispatch => {
    console.log('getProducts ', category, subcategory, filters)
    // диспатчим что запрос начался
    dispatch(loadProductsStarted())

    setTimeout(() => {
        // Делаем запрос относительно категории
        const {start} = filters.pagination,
            productsForCategory: ProductBriefInterface[] = products.map(p => ({
                id: start + p.id,
                name: p.name + category + ' ' + subcategory + start.toString(),
                imgLink: p.imgLink,
            }))

        if (start > 0) {
            dispatch(loadMoreProductsSuccess(productsForCategory))
            return
        }

        dispatch(loadProductsSuccess(productsForCategory))
    }, 2000)
}
