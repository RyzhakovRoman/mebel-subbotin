import * as React from 'react'
import {ReactElement} from 'react'
import CATALOG_CATEGORIES from '../../../navigation/catalogCategories'
import {useParams} from 'react-router'
import {Link} from 'react-router-dom'
import {R} from '../../../navigation/routes'
import './index.less'

export default function Subcategories(): ReactElement {
    // todo - Сделать тип возможных категорий
    const {category} = useParams(),
        subcategories = CATALOG_CATEGORIES[category].subcategories,
        subcategoryItems = []

    if (subcategories === undefined) return <h3>Нет подкатегорий</h3>

    for (const subcategoryId in subcategories) {
        const subcategoryInfo = subcategories[subcategoryId]
        subcategoryItems.push(
            <Link
                className={'subcategories__item'}
                to={`${R.CATALOG}/${category}/${subcategoryId}`}
                key={subcategoryId}
            >
                {subcategoryInfo.nameForLink}
            </Link>
        )
    }

    return <div className={'subcategories'}>{subcategoryItems}</div>
}
