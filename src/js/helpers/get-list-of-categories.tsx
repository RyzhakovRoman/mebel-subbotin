import * as React from 'react'
import {ReactElement} from 'react'
import {Link} from 'react-router-dom'
import categories from '../models/categories'
import {R} from '../navigation/routes'
import CategoryInterface from '../types/models/category-interface'

const getListOfCategories = (
    classForItem?: string,
    classForLink?: string
): ReactElement[] => {
    const categoryList = [],
        categoriesArray: CategoryInterface[] = Object.values(categories)

    // Формируем список всех основных категорий
    categoriesArray.forEach(category => {
        if (category.parentCategoryId === null) {
            categoryList.push(
                <li className={classForItem} key={category.translit}>
                    <Link
                        className={classForLink}
                        to={`${R.CATALOG}/${category.translit}`}
                    >
                        {category.nameForLink}
                    </Link>
                </li>
            )
        }
    })

    return categoryList
}

export default getListOfCategories
