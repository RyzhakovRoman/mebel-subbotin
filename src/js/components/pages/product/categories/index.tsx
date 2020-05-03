import * as React from 'react'
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {R} from '../../../../navigation/routes'
import {ProductInterface} from '../../../../types/models/product-interface'
import {CategoryInterface} from '../../../../types/models/category-interface'

interface ProductCategoriesPropsInterface {
    categories: CategoryInterface[];
}

const ProductCategories: FC<ProductCategoriesPropsInterface> = ({
    categories,
}) => {
    return (
        <p className={'product__categories'}>
            Категории:{' '}
            {categories.map((category, i) => {
                let linkToCategoryPart = '',
                    parentCategory: CategoryInterface = null

                if (category.parentCategoryId !== null)
                    parentCategory = categories.find(
                        ({id}) => category.parentCategoryId === id
                    )

                if (parentCategory !== null)
                    linkToCategoryPart = `${parentCategory.translit}/`

                linkToCategoryPart += `${category.translit}`

                return (
                    <span key={category.id}>
                        <Link
                            to={`${R.CATALOG}/${linkToCategoryPart}`}
                            key={category.id}
                        >
                            {category.h1}
                        </Link>
                        {i < categories.length - 1 ? (
                            <span key={`${category.translit}`}>, </span>
                        ) : null}
                    </span>
                )
            })}
        </p>
    )
}

export default ProductCategories
