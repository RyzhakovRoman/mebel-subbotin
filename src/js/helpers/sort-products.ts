import {MapOfProductType} from '../types/models/product-interface'
import {SortingType} from '../types'

interface SortingInterface {
    cost?: SortingType;
}

const compareProductByCost = {
    asc: (a, b) => b[1].cost - a[1].cost,
    desc: (a, b) => a[1].cost - b[1].cost,
}

// eslint-disable-next-line
const sortProducts = (
    // Id категории для поиска продуктов
    products: MapOfProductType,
    sorting: SortingInterface
): MapOfProductType => {
    const arrayOfProducts = [...products.entries()]

    if (sorting?.cost !== '') {
        // Передана сортировка по цене
        const compareProductsByCost = compareProductByCost[sorting.cost],
            sortedFilteredProductsArray = arrayOfProducts.sort(
                compareProductsByCost
            ),
            sortedFilteredProducts: MapOfProductType = new Map(
                sortedFilteredProductsArray
            )

        // console.log('sortedFilteredProducts ', sortedFilteredProducts)

        return sortedFilteredProducts
    }

    console.warn('Не передано значений сортировок')

    return products
}

export default sortProducts
