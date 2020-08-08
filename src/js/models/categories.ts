// @ts-nocheck

import {
    AssocListOfCategoriesInterface,
    OldCategoryInterface,
} from '../types/models/category-interface'
import arrayToAssocList from '../helpers/array-to-assoc-list'

const categories: OldCategoryInterface[] = [
    {
        id: '1',
        translit: 'krovati',
        h1: 'Кровати',
        nameForLink: 'Кровати',
        parentCategoryId: null,
    },
    {
        id: '2',
        translit: 'shkafy',
        h1: 'Шкафы',
        nameForLink: 'Шкафы',
        parentCategoryId: null,
    },
    {
        id: '3',
        translit: 'tumby',
        h1: 'Тумбы',
        nameForLink: 'Тумбы',
        parentCategoryId: null,
    },
    {
        id: '4',
        translit: 'stoly',
        h1: 'Столы',
        nameForLink: 'Столы',
        parentCategoryId: null,
    },
    {
        id: '5',
        translit: 'stulya',
        h1: 'Стулья',
        nameForLink: 'Стулья',
        parentCategoryId: null,
    },
    {
        id: '6',
        translit: 'detskie',
        h1: 'Детские кровати',
        nameForLink: 'Детские',
        parentCategoryId: '1',
    },
    {
        id: '7',
        translit: 'dvuhspalnye',
        h1: 'Двухспальные кровати',
        nameForLink: 'Двухспальные',
        parentCategoryId: '1',
    },
    {
        id: '8',
        translit: 'zhurnalnye',
        h1: 'Журнальные столы',
        nameForLink: 'Журнальные',
        parentCategoryId: '4',
    },
    {
        id: '9',
        translit: 'obedennye',
        h1: 'Обеденные столы',
        nameForLink: 'Обеденные',
        parentCategoryId: '4',
    },
    {
        id: '10',
        translit: 'dvuhyarusnye',
        h1: 'Двухъярусные кровати',
        nameForLink: 'Двухъярусные',
        parentCategoryId: '1',
    },
    {
        id: '11',
        translit: 'taburety',
        h1: 'Табуреты',
        nameForLink: 'Табуреты',
        parentCategoryId: '5',
    },
    {
        id: '12',
        translit: 'dlya-obuvi',
        h1: 'Тумбы для обуви',
        nameForLink: 'Для обуви',
        parentCategoryId: '3',
    },
    {
        id: '13',
        translit: 'lavki',
        h1: 'Лавки',
        nameForLink: 'Лавки',
        parentCategoryId: '5',
    },
    {
        id: '14',
        translit: 'komody',
        h1: 'Комоды',
        nameForLink: 'Комоды',
        parentCategoryId: null,
    },
]

// eslint-disable-next-line
const assocListOfCategories: AssocListOfCategoriesInterface = arrayToAssocList(
    categories
)

// console.log('assocListOfCategories ', assocListOfCategories)

export default assocListOfCategories
