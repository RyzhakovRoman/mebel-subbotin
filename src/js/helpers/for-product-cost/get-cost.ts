/*
    Стоимость зависит от стоимости продукта и выбранных свойств
 */

import {
    AssocListOfSelectedPropertyInterface,
    MapOfProductPropertyType,
} from '../../types'
import ColorInterface from '../../types/models/color-interface'
import {COST_PERCENT_FOR_ALL_COLORS} from '../../components/constants'

const getCost = (
    baseProductCost: number,
    productProperties: MapOfProductPropertyType,
    selectedProperties: AssocListOfSelectedPropertyInterface,
    selectedColorProperty: ColorInterface
): number => {
    // console.log(
    //     'getCost arguments ',
    //     baseProductCost,
    //     productProperties,
    //     selectedProperties
    // )

    // Отделяем свойства влияющие на цену,
    // делением свойств на те кто добавляют количество рублей к базовой стоимости и на те,
    // которые добавляют процент от базовой суммы + процент от суммы с учетом всех добавленных стоимостей
    const selectedPropertiesWithAddedCost = {},
        selectedPropertiesWithCostPercent = {}

    for (const propertyTypeId in selectedProperties) {
        const productPropertyValueId = selectedProperties[propertyTypeId],
            property = productProperties.get(+propertyTypeId),
            selectedProductPropertyValue = property.values.get(
                productPropertyValueId
            )

        // console.log('property ', property)

        if (selectedProductPropertyValue.addedCost !== null)
            selectedPropertiesWithAddedCost[
                propertyTypeId
            ] = selectedProductPropertyValue
        else if (selectedProductPropertyValue.costPercent !== null)
            selectedPropertiesWithCostPercent[
                propertyTypeId
            ] = selectedProductPropertyValue
    }

    // Стоимость со всеми добавочными стоимостями от свойств продукта
    let costWithAllAddedCost: number = baseProductCost,
        costOfOtherProperties: number = 0

    for (const propertyTypeId in selectedPropertiesWithAddedCost) {
        const selectedProductPropertyValue =
            selectedPropertiesWithAddedCost[propertyTypeId]
        costWithAllAddedCost += +selectedProductPropertyValue.addedCost
    }

    if (selectedColorProperty !== undefined) {
        costOfOtherProperties +=
            (costWithAllAddedCost / 100) * COST_PERCENT_FOR_ALL_COLORS
    }

    for (const propertyTypeId in selectedPropertiesWithCostPercent) {
        const selectedProductPropertyValue =
            selectedPropertiesWithCostPercent[propertyTypeId]
        costOfOtherProperties +=
            (costWithAllAddedCost / 100) *
            selectedProductPropertyValue.costPercent
    }

    return Math.floor(costWithAllAddedCost + costOfOtherProperties)
}

export default getCost
