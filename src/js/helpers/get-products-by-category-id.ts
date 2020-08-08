import {MapOfCategoryType} from '../types/models/category-interface'
import {MapOfProductType} from '../types/models/product-interface'
import products from '../models/products'
import categories from '../models/categories'

const getProductsByCategoryId = (
    // Id категории для поиска продуктов
    categoryId: number
): MapOfProductType => {
    // Подкатегории для категории поиска
    const subcategories: MapOfCategoryType = new Map(),
        filteredProducts: MapOfProductType = new Map()
    // console.log('categoryId ', categoryId)
    // console.log('products ', products)
    // console.log('categories ', categories)
    // Ищем дочернии категории,
    // это те категории у которых родительская
    // равна id категории для поиска продуктов
    for (const id in categories) {
        const category = categories[id]
        if (category.parentCategoryId === categoryId)
            subcategories.set(+id, category)
    }

    // Ищем все продукты, включая дочерние
    for (const id in products) {
        const product = products[id]
        // Если категория продукта есть в нашем списке категорий,
        // то это нужный продукт
        if (
            subcategories.has(product.categoryId) ||
            product.categoryId === categoryId
        )
            filteredProducts.set(+id, product)
    }

    console.log('Продукты для категории ', categoryId, filteredProducts)

    return filteredProducts
}

export default getProductsByCategoryId
