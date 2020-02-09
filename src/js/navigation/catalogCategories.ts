// interface CatalogSubcategoriesInterface {
//     name: string;
//     pathString: string;
// }
//
// interface CatalogCategoryInterface {
//     name: string;
//     pathString: string;
//     subcategories: CatalogSubcategoriesInterface[];
// }

interface CatalogSubcategoryInterface {
    h1: string;
    nameForLink: string;
}

interface CatalogSubcategoriesInterface {
    [key: string]: CatalogSubcategoryInterface;
}

interface CatalogCategoryInterface {
    h1: string;
    nameForLink: string;
    subcategories?: CatalogSubcategoriesInterface;
}

interface CatalogCategoriesInterface {
    [key: string]: CatalogCategoryInterface;
}

const CATALOG_CATEGORIES: CatalogCategoriesInterface = {
    krovati: {
        h1: 'Кровати',
        nameForLink: 'Кровати',
        subcategories: {
            detskie: {
                h1: 'Детские кровати',
                nameForLink: 'Детские',
            },
            dvuhspalnye: {
                h1: 'Двухспальные кровати',
                nameForLink: 'Двухспальные',
            },
        },
    },
    stoly: {
        h1: 'Столы',
        nameForLink: 'Столы',
        subcategories: {
            pismennye: {
                h1: 'Письменные столы',
                nameForLink: 'Письменные',
            },
            obedennye: {
                h1: 'Обеденные столы',
                nameForLink: 'Обеденные',
            },
        },
    },
    tumby: {
        h1: 'Тумбы',
        nameForLink: 'Тумбы',
    },
}

// console.log(CATALOG_CATEGORIES_.krovati.subcategories['detskie-df'])

// const CATALOG_CATEGORIES: CatalogCategoryInterface[] = [
//     {
//         name: 'Кровати',
//         pathString: 'krovati',
//         subcategories: [
//             {
//                 name: 'Детские',
//                 pathString: 'detskie',
//             },
//         ],
//     },
//     // {
//     //     name: 'Стулья',
//     //     pathString: 'stulya',
//     // },
//     // {
//     //     name: 'Столы',
//     //     pathString: 'stoly',
//     // },
// ]

export default CATALOG_CATEGORIES
