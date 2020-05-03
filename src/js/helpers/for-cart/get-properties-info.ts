import ProductConfigurationInterface from '../../types/render/product-configuration-interface'

const getPropertiesInfo = ({
    assocListOfSelectedProperty,
}: ProductConfigurationInterface): string => {
    let propertiesInfo = ''
    for (const propertyTypeType in assocListOfSelectedProperty) {
        const property = assocListOfSelectedProperty[propertyTypeType]
        propertiesInfo +=
            property.propertyTypeName +
            ': ' +
            property.propertyValueValue +
            ', '
    }
    return propertiesInfo.slice(0, propertiesInfo.length - 2)
}

export default getPropertiesInfo
