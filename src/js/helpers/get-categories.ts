import ProductInterface from '../types/models/product-interface'
import CategoryInterface from '../types/models/category-interface'
import {categories} from '../models/categories'

const getCategories = ({categoryId}: ProductInterface): CategoryInterface[] => {
    const productCategories: CategoryInterface[] = [],
        productCategory = categories.find(
            category => categoryId === category.id
        )

    productCategories.push(productCategory)

    if (productCategory.parentCategoryId !== null) {
        const parentCategory = categories.find(
            category => productCategory.parentCategoryId === category.id
        )
        productCategories.push(parentCategory)
    }

    return productCategories
}

export default getCategories
