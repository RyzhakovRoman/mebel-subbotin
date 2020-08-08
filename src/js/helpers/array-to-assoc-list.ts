// Поля для перевода в int
const ids = [
    'categoryId',
    'parentCategoryId',
    'productId',
    'propertyValueId',
    'propertyTypeId',
    'cost',
    'addedCost',
    'costPercent',
    'productsPropertyValuesGroupId',
]

const arrayToAssocList = (arr: any[]): any => {
    const assocList = {}

    arr.forEach(item => {
        for (const key in item) {
            if (ids.find(id => id === key) && item[key] !== null) {
                item[key] = +item[key]
            }
        }

        assocList[item.id] = item
        delete item.id
    })

    return assocList
}

export default arrayToAssocList
