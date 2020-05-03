import {CategoryInterface} from '../types/models/category-interface'
import {ProductInterface} from '../types/models/product-interface'
import {products} from '../models/products'
import {SortingType} from '../types'
import {categories} from '../models/categories'
import {ASC} from '../components/pages/catalog/sorting'

interface SortingInterface {
    cost?: SortingType;
}

export function getProducts(
    category: CategoryInterface,
    sorting?: SortingInterface
): ProductInterface[] {
    const // ищем все подкатегории переданной категории
        subcategories = categories.filter(
            subcategory => subcategory.parentCategoryId === category.id
        ),
        filteredProducts = products.filter(
            product =>
                product.categoryId === category.id ||
                subcategories.find(
                    subcategory => subcategory.id === product.categoryId
                ) !== undefined
        )

    console.log('getProducts.filteredProducts ', subcategories)
    // @ts-ignore
    window.filteredProducts = filteredProducts

    if (sorting !== undefined && sorting.cost !== '') {
        filteredProducts.sort(compareProductsByCost)
        if (sorting.cost === ASC) filteredProducts.reverse()
    }

    return [...filteredProducts]
}

type CPBC = (productA: ProductInterface, productB: ProductInterface) => number

const compareProductsByCost: CPBC = ({cost: costA}, {cost: costB}) => {
    if (costA > costB) return 1
    if (costA === costB) return 0
    if (costA < costB) return -1
}
