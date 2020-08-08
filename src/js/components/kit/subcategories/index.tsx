import * as React from 'react'
import {FC, ReactElement} from 'react'
import {Link} from 'react-router-dom'
import {R} from '../../../navigation/routes'
import './index.less'
import categories from '../../../models/categories'
import CategoryInterface from '../../../types/models/category-interface'

interface SubcategoriesPropsInterface {
    categoryInfo: [number, CategoryInterface];
    className?: string;
}

const Subcategories: FC<SubcategoriesPropsInterface> = ({
    categoryInfo: [categoryId, category],
    className = '',
}): ReactElement => {
    // todo - Сделать тип возможных категорий
    const // Ищем список подкатегорий, у которых родительская категория
        // равна выбранной категории
        subcategoriesList = []

    for (const id in categories) {
        const subcategory = categories[id]

        if (subcategory.parentCategoryId === categoryId) {
            subcategoriesList.push(
                <Link
                    to={`${R.CATALOG}/${category.translit}/${subcategory.translit}`}
                    className={'subcategories__item'}
                    key={id}
                >
                    {subcategory.nameForLink}
                </Link>
            )
        }
    }

    return (
        <div className={'subcategories ' + className}>
            <Link
                to={`${R.CATALOG}/${category.translit}`}
                className={'subcategories__item'}
                key={'all'}
            >
                Все
            </Link>
            {subcategoriesList}
        </div>
    )
}

export default Subcategories
