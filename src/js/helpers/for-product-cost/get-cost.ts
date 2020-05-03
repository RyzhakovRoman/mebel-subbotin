/*
    Стоимость зависит от стоимости продукта и выбранных свойств
 */

import {AssocListOfSelectedPropertyInterface} from '../../types/render/product-configuration-interface'

const getCost = (
    baseProductCost: number,
    assocList: AssocListOfSelectedPropertyInterface
): number => {
    console.log('getCost arguments ', baseProductCost, assocList)

    let productCostWithSize: number = baseProductCost,
        // Часть стоимости, в рублях, которая высчитывается
        // путем вычисления процентов других свойств от стоимости,
        // с учетом размера
        costOfOtherProperties: number = 0

    for (const propertyTypeType in assocList) {
        const property = assocList[propertyTypeType]

        /*
            Тут мы добавляем то, как на стоимость
            влияют различные свойства
         */

        // Для размера
        if (propertyTypeType === 'size') {
            if (property.costPercent !== null)
                productCostWithSize +=
                    (baseProductCost / 100) * property.costPercent
        }

        // Для цвета
        if (propertyTypeType === 'color') {
            if (property.costPercent !== null)
                costOfOtherProperties +=
                    (productCostWithSize / 100) * property.costPercent
        }
    }

    return Math.floor(productCostWithSize + costOfOtherProperties)
}

export default getCost
