import assocListOfCategories from '../../models/categories'
import {AssocListOfCategoriesInterface} from '../../types/models/category-interface'

const findAllMainCategories = (): AssocListOfCategoriesInterface => {
    const mainCategories: AssocListOfCategoriesInterface = {}

    for (const categoryId in assocListOfCategories) {
        const category = assocListOfCategories[categoryId]

        if (category.parentCategoryId === null)
            mainCategories[categoryId] = category
    }

    return mainCategories
}

export default findAllMainCategories
