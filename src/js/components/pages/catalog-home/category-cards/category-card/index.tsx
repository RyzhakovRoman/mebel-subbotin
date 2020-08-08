import * as React from 'react'
import {FC} from 'react'
import './index.less'
import Icon from '../../../../kit/icon'
import Subcategories from '../../../../kit/subcategories'
import CategoryInterface from '../../../../../types/models/category-interface'

interface CategoryCardPropsInterface {
    name: string;
    iconName: string;
    categoryInfo: [number, CategoryInterface];
}

const CategoryCard: FC<CategoryCardPropsInterface> = ({
    name,
    iconName,
    categoryInfo,
}) => {
    return (
        <div className={'category-card'}>
            <div className={'category-card__icon'}>
                <Icon name={iconName} />
            </div>
            <div className={'category-card__name'}>{name}</div>
            <Subcategories
                className={'category-card__subcategories'}
                categoryInfo={categoryInfo}
            />
        </div>
    )
}

export default CategoryCard
