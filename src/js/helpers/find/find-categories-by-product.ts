import ProductInterface from '../../types/models/product-interface'
import {MapOfCategoryType} from '../../types/models/category-interface'
import categories from '../../models/categories'

const getCategoriesByProduct = ({
    categoryId,
}: ProductInterface): MapOfCategoryType => {
    const productCategory = categories[categoryId],
        productCategories: MapOfCategoryType = new Map()

    productCategories.set(categoryId, productCategory)

    if (productCategory.parentCategoryId !== null) {
        const parentCategory = categories[productCategory.parentCategoryId]
        productCategories.set(productCategory.parentCategoryId, parentCategory)
    }

    return productCategories
}

export default getCategoriesByProduct
