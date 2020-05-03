import {ReactElement} from 'react'
import * as React from 'react'
import {Link} from 'react-router-dom'
import {categories} from '../models/categories'
import {R} from '../navigation/routes'

export default function getListOfCategories(
    classForItem?: string,
    classForLink?: string
): ReactElement[] {
    const categoryNodes = []

    // Формируем список всех основных категорий
    categories.forEach(category => {
        if (category.parentCategoryId === null) {
            categoryNodes.push(
                <li className={classForItem} key={category.id}>
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

    return categoryNodes
}
