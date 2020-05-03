import ProductInterface from '../types/models/product-interface'
import {productsPropertyValues} from '../models/products-property-values'
import ProductPropertyValueInterface from '../types/models/product-property-value-interface'
import AssocListOfProductPropertiesByTypeInterface from '../types/render/assoc-list-of-product-properties-by-type-interface'
import ProductPropertyValueRenderInterface from '../types/render/product-property-value-render-interface'
import findPropertyValueById from './search-in-models/find-property-value-by-id'
import findPropertyTypeById from './search-in-models/find-property-type-by-id'

const getAssocListOfProductPropertiesByType = (
    product: ProductInterface
): AssocListOfProductPropertiesByTypeInterface => {
    const assocListIds: AssocListOfProductPropertiesByTypeInterface = {},
        assocListByType: AssocListOfProductPropertiesByTypeInterface = {},
        // Ищем все связи продукта - значение свойства
        productPropertyValueListForProduct: ProductPropertyValueInterface[] = productsPropertyValues.filter(
            item => item.productId === product.id
        )

    // console.log(
    //     'productPropertyValueListForProduct ',
    //     productPropertyValueListForProduct
    // )

    // Обходим все значения свойств этого продукта
    productPropertyValueListForProduct.forEach(item => {
        // console.log('getAssocListOfProductPropertiesByType. Свойство ', item)

        const propertyValue = findPropertyValueById(item.propertyValueId),
            property: ProductPropertyValueRenderInterface = {
                ...propertyValue,
                costPercent: item.costPercent,
            }

        // console.log(
        //     'getAssocListOfProductPropertiesByType. propertyValue ',
        //     propertyValue
        // )

        if (propertyValue.propertyTypeId in assocListIds) {
            assocListIds[propertyValue.propertyTypeId].list.push(property)
        } else {
            assocListIds[propertyValue.propertyTypeId] = {
                propertyTypeName: null,
                list: [property],
            }
        }
    })

    // console.log(
    //     'getAssocListOfProductPropertiesByType assocListIds ',
    //     assocListIds
    // )

    for (const propertyTypeId in assocListIds) {
        const propertyType = findPropertyTypeById(+propertyTypeId)
        assocListByType[propertyType.type] = assocListIds[propertyTypeId]
        assocListByType[propertyType.type].propertyTypeName = propertyType.name
    }

    // console.log('getAssocListOfProductPropertiesByType ', assocListByType)

    return assocListByType
}

export default getAssocListOfProductPropertiesByType
