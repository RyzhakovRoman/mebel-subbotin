import productsPropertyValues from '../../models/products-property-values'
import {MapOfProductPropertyValueType} from '../../types/models/product-property-value-interface'
import assocListOfPropertyValueForGroup from '../../models/property-values-for-groups'

const findProductsPropertyValuesByProductId = (
    productId: number
): MapOfProductPropertyValueType => {
    const filteredProductsPropertyValues: MapOfProductPropertyValueType = new Map()

    // console.log('productsPropertyValues', productsPropertyValues)

    for (const id in productsPropertyValues) {
        const productPropertyValue = productsPropertyValues[id],
            {productsPropertyValuesGroupId} = productPropertyValue

        if (
            productPropertyValue.productId === productId &&
            productsPropertyValuesGroupId !== null
        ) {
            for (const propertyValueForGroupId in assocListOfPropertyValueForGroup) {
                const propertyValueForGroup =
                        assocListOfPropertyValueForGroup[
                            propertyValueForGroupId
                        ],
                    id = `g${String(
                        productsPropertyValuesGroupId
                    )}${propertyValueForGroupId}`

                // todo очень узкое место, id может быть не уникален
                filteredProductsPropertyValues.set(id, {
                    productId: productPropertyValue.productId,
                    ...propertyValueForGroup,
                })
            }
        }

        if (
            productPropertyValue.productId === productId &&
            productsPropertyValuesGroupId === null
        )
            filteredProductsPropertyValues.set(id, productPropertyValue)
    }

    return filteredProductsPropertyValues
}

export default findProductsPropertyValuesByProductId
