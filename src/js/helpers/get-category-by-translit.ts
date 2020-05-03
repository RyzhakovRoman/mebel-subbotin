import {CategoryInterface} from '../types/models/category-interface'
import {categories} from '../models/categories'

export function getCategoryByTranslit(
    categoryTranslit: string
): CategoryInterface {
    return categories.find(category => category.translit === categoryTranslit)
}
