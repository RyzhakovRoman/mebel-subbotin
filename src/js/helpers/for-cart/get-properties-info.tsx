import {MapOfSelectedPropertyInfoType} from '../../types/render/product-configuration-interface'
import {COLOR_PROPERTY_TYPE} from '../../components/constants'
import ColorInterface from '../../types/models/color-interface'
import {ReactNode} from 'react'
import * as React from 'react'

const getPropertiesInfo = (
    selectedProperties: MapOfSelectedPropertyInfoType
): ReactNode => {
    const propertiesInfo: ReactNode[] = []

    for (const {
        propertyTypeName,
        propertyTypeType,
        propertyValueValue,
    } of selectedProperties.values()) {
        if (propertyTypeType === COLOR_PROPERTY_TYPE) {
            const color = propertyValueValue as ColorInterface

            if (color === undefined || color.color === undefined) continue

            propertiesInfo.push(
                <div style={{display: 'inline-block', }} key={propertyTypeType}>
                    {propertyTypeName}: <span
                        style={{
                            display: 'inline-block',
                            borderRadius: '50%',
                            width: '1rem',
                            height: '1rem',
                            marginBottom: '-0.2rem',
                            backgroundColor: color.color
                        }}/> {color.name} ({color.ral})
                </div>,
                <span key={propertyTypeType + 'd'}>,</span>
            )
        } else {
            propertiesInfo.push(
                <span key={propertyTypeType}>
                    {propertyTypeName}: {propertyValueValue}
                </span>,
                <span key={propertyTypeType + 'd'}>, </span>
            )
        }
    }

    propertiesInfo.pop()

    // return propertiesInfo.slice(0, propertiesInfo.length - 2)
    return propertiesInfo
}

export default getPropertiesInfo
