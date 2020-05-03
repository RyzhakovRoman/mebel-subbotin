import * as React from 'react'
import {ReactElement} from 'react'
import {useParams} from 'react-router'
import {Link} from 'react-router-dom'
import {R} from '../../../navigation/routes'
import './index.less'
import {getCategoryByTranslit} from '../../../helpers/get-category-by-translit'
import {categories} from '../../../models/categories'

export default function Subcategories(): ReactElement {
    // todo - Сделать тип возможных категорий
    const {category: categoryTranslit} = useParams(),
        // Ищем категорию
        selectedCategory = getCategoryByTranslit(categoryTranslit),
        // Ищем список подкатегорий, у которых родительская категория
        // равна выбранной категории
        subcategoriesList = categories.filter(
            category => category.parentCategoryId === selectedCategory.id
        )

    if (subcategoriesList === undefined) return null

    return (
        <div className={'subcategories'}>
            <Link
                to={`${R.CATALOG}/${categoryTranslit}`}
                className={'subcategories__item'}
                key={'all'}
            >
                Все
            </Link>
            {subcategoriesList.map(subcategory => (
                <Link
                    to={`${R.CATALOG}/${categoryTranslit}/${subcategory.translit}`}
                    className={'subcategories__item'}
                    key={subcategory.id}
                >
                    {subcategory.nameForLink}
                </Link>
            ))}
        </div>
    )
}
