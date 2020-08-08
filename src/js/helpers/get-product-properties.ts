import {MapOfProductPropertyType} from '../types'
import propertyTypes from '../models/property-types'
import findProductsPropertyValuesByProductId from './find/find-products-property-values-by-product-id'
import joinPropertyValuesToProductPropertyValues from './join/join-property-values-to-product-property-values'

const getProductProperties = (productId: number): MapOfProductPropertyType => {
    const productProperties = new Map(),
        productsPropertyValues = findProductsPropertyValuesByProductId(
            productId
        ),
        productPropertyValuesAndPropertyValues = joinPropertyValuesToProductPropertyValues(
            productsPropertyValues
        )

    console.log('Все значения свойств продукта! ', productsPropertyValues)

    for (const [
        id,
        productPropertyValueAndPropertyValue,
    ] of productPropertyValuesAndPropertyValues.entries()) {
        const {propertyTypeId} = productPropertyValueAndPropertyValue

        // Если тип с таким id уже добавлен
        if (productProperties.has(propertyTypeId))
            // Добавляем значение свойства в это тип
            productProperties
                .get(propertyTypeId)
                .values.set(id, productPropertyValueAndPropertyValue)
        else
            productProperties.set(propertyTypeId, {
                ...propertyTypes[propertyTypeId],
                values: new Map([[id, productPropertyValueAndPropertyValue]]),
            })
    }

    console.log('Свойства продукта! ', productProperties.values())

    return productProperties
}

export default getProductProperties
