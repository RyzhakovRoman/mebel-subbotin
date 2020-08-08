import * as React from 'react'
import {FC} from 'react'
import Row from 'antd/lib/grid/row'
import Col from 'antd/lib/grid/col'
import CategoryCard from './category-card'
import CategoryInterface from '../../../../types/models/category-interface'
import findAllMainCategories from '../../../../helpers/find/find-all-main-categories'

const mainCategories = findAllMainCategories()

const CategoryCards: FC = () => {
    const cards = []

    for (const categoryId in mainCategories) {
        const category = mainCategories[categoryId]

        cards.push(
            <Col xs={12} sm={8} lg={4} key={categoryId}>
                <CategoryCard
                    name={category.nameForLink}
                    iconName={category.translit}
                    categoryInfo={[+categoryId, category]}
                />
            </Col>
        )
    }

    return <Row gutter={24}>{cards}</Row>
}

export default CategoryCards
