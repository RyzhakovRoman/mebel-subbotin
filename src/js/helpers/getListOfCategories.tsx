import * as React from 'react'
import {Link} from 'react-router-dom'
import CATALOG_CATEGORIES from '../navigation/catalogCategories'
import {R} from '../navigation/routes'
import {ReactElement} from 'react'

export default function getListOfCategories(
    classForItem: string,
    classForLink: string
): ReactElement[] {
    const categories = []

    for (const category in CATALOG_CATEGORIES) {
        // eslint-disable-next-line no-prototype-builtins
        if (!CATALOG_CATEGORIES.hasOwnProperty(category)) continue

        const categoryInfo = CATALOG_CATEGORIES[category]
        categories.push(
            <li className={classForItem} key={category}>
                <Link className={classForLink} to={`${R.CATALOG}/${category}`}>
                    {categoryInfo.nameForLink}
                </Link>
            </li>
        )
    }

    return categories
}
