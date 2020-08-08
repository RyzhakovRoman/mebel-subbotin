import CategoryInterface from '../../types/models/category-interface'
import categories from '../../models/categories'

const findCategoryByTranslit = (
    categoryTranslit: string
): [number, CategoryInterface] => {
    console.log('getCategoryByTranslit ', categoryTranslit)
    for (const id in categories) {
        const category = categories[id]

        if (category.translit === categoryTranslit) return [+id, category]
    }

    return [null, null]
}

export default findCategoryByTranslit
