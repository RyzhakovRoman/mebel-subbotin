import {CategoryInterface} from '../types/models/category-interface'

export const categories: CategoryInterface[] = [
    {
        id: 0,
        translit: 'krovati',
        h1: 'Кровати',
        nameForLink: 'Кровати',
        parentCategoryId: null,
    },
    {
        id: 1,
        translit: 'shkafy',
        h1: 'Шкафы',
        nameForLink: 'Шкафы',
        parentCategoryId: null,
    },
    {
        id: 2,
        translit: 'tumby',
        h1: 'Тумбы',
        nameForLink: 'Тумбы',
        parentCategoryId: null,
    },
    {
        id: 3,
        translit: 'stoly',
        h1: 'Столы',
        nameForLink: 'Столы',
        parentCategoryId: null,
    },
    {
        id: 4,
        translit: 'stulya',
        h1: 'Стулья',
        nameForLink: 'Стулья',
        parentCategoryId: null,
    },
    {
        id: 5,
        translit: 'detskie',
        h1: 'Детские кровати',
        nameForLink: 'Детские',
        parentCategoryId: 0,
    },
    {
        id: 6,
        translit: 'dvuhspalnye',
        h1: 'Двухспальные кровати',
        nameForLink: 'Двухспальные',
        parentCategoryId: 0,
    },
    {
        id: 7,
        translit: 'zhurnalnye',
        h1: 'Журнальные столы',
        nameForLink: 'Журнальные',
        parentCategoryId: 3,
    },
    {
        id: 8,
        translit: 'obedennye',
        h1: 'Обеденные столы',
        nameForLink: 'Обеденные',
        parentCategoryId: 3,
    },
    {
        id: 9,
        translit: 'dvuhyarusnye',
        h1: 'Двухъярусные кровати',
        nameForLink: 'Двухъярусные',
        parentCategoryId: 0,
    },
    {
        id: 10,
        translit: 'taburety',
        h1: 'Табуреты',
        nameForLink: 'Табуреты',
        parentCategoryId: 4,
    },
    {
        id: 11,
        translit: 'dlya-obuvi',
        h1: 'Тумбы для обуви',
        nameForLink: 'Для обуви',
        parentCategoryId: 2,
    },
]