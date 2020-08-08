import {MapOfProductPropertyValueType} from '../../types/models/product-property-value-interface'
import propertyValues from '../../models/property-values'
import {
    MapOfProductPropertyValueAndPropertyValueType,
    ProductPropertyValueAndPropertyValue,
} from '../../types'

const joinPropertyValuesToProductPropertyValues = (
    productPropertyValues: MapOfProductPropertyValueType
): MapOfProductPropertyValueAndPropertyValueType => {
    const map: MapOfProductPropertyValueAndPropertyValueType = new Map()

    for (const [id, productPropertyValue] of productPropertyValues.entries()) {
        const propertyValue =
            propertyValues[productPropertyValue.propertyValueId]

        // const {propertyValueGroupId} = propertyValue
        // console.log('propertyValue ', propertyValue)

        // Если свойство имеет ссылку
        // на группу свойств, то
        // ищем все свойсва из группы
        // if (propertyValueGroupId !== null) {
        //     // Ищем все значения свойств из группы
        //     const assocListOfPropertyValue = findAllPropertyValuesByGroupId(
        //         propertyValueGroupId
        //     )
        //     console.log('assocListOfPropertyValue ', assocListOfPropertyValue)
        //
        //     // Обходим все значения и добавляем их в мап
        //     for (const propertyValueId in assocListOfPropertyValue) {
        //         const propertyValue = assocListOfPropertyValue[propertyValueId],
        //             productPropertyValueAndPropertyValue: ProductPropertyValueAndPropertyValue = {
        //                 ...productPropertyValue,
        //                 ...propertyValue,
        //                 // Если в таблице productPropertyValue
        //                 // указкна цена, то она перезаписывает дефолтную, хоть у группы,
        //                 // хоть у одного свойства
        //                 // Другими словами, цена для значения-группы
        //                 // перезаписывает дефолтный процент всех свойств группы
        //                 // costPercent:
        //                 //     productPropertyValue.costPercent !== null
        //                 //         ? productPropertyValue.costPercent
        //                 //         : propertyValue.defaultCostPercent,
        //             },
        //             concatId = id + +propertyValueId
        //
        //         map.set(+concatId, productPropertyValueAndPropertyValue)
        //     }
        // } else {
        const productPropertyValueAndPropertyValue: ProductPropertyValueAndPropertyValue = {
            ...productPropertyValue,
            ...propertyValues[productPropertyValue.propertyValueId],
        }

        map.set(id, productPropertyValueAndPropertyValue)
        // }
    }

    return map
}

// const findAllPropertyValuesByGroupId = (
//     groupId: number
// ): AssocListOfPropertyValuesInterface => {
//     const group = propertyValueGroups.get(groupId),
//         assocListOfPropertyValues: AssocListOfPropertyValuesInterface = {}
//
//     group.arrayOfPropertyValueId.forEach(propertyValueId => {
//         assocListOfPropertyValues[propertyValueId] =
//             propertyValues[propertyValueId]
//     })
//
//     return assocListOfPropertyValues
// }

export default joinPropertyValuesToProductPropertyValues
