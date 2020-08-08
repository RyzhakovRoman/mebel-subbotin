import * as React from 'react'
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {R} from '../../../../navigation/routes'
import {MapOfCategoryType} from '../../../../types/models/category-interface'

interface ProductCategoriesPropsInterface {
    categories: MapOfCategoryType;
}

const ProductCategories: FC<ProductCategoriesPropsInterface> = ({
    categories,
}) => {
    const categoryLinks = []

    for (const category of categories.values()) {
        const {parentCategoryId} = category
        let linkToCategoryPart = ''

        if (parentCategoryId === null) linkToCategoryPart += category.translit

        if (parentCategoryId !== null)
            linkToCategoryPart += `${
                categories.get(parentCategoryId).translit
            }/${category.translit}`

        categoryLinks.push(
            <span key={category.translit}>
                <Link
                    to={`${R.CATALOG}/${linkToCategoryPart}`}
                    key={category.translit}
                >
                    {category.h1}
                </Link>
            </span>,
            <span key={`${category.translit}+`}>, </span>
        )
    }

    categoryLinks.pop()

    return <p className={'product__categories'}>Категории: {categoryLinks}</p>
}

export default ProductCategories
