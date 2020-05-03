import * as React from 'react'
import {FC, useCallback, useState} from 'react'
import AssocListOfProductPropertiesByTypeInterface from '../../../../types/render/assoc-list-of-product-properties-by-type-interface'
import {AssocListOfSelectedPropertyInterface} from '../../../../types/render/product-configuration-interface'

interface PropertiesPropsInterface {
    assocList: AssocListOfProductPropertiesByTypeInterface;
    onChangeValue: (assocList: AssocListOfSelectedPropertyInterface) => void;
}

const Properties: FC<PropertiesPropsInterface> = ({
    assocList,
    onChangeValue,
}) => {
    const selectList = [],
        [
            selectedValues,
            setSelectedValues,
        ] = useState<AssocListOfSelectedPropertyInterface>(() => {
            // Формируем выбранные свойства по умолчанию
            const selectedValues: AssocListOfSelectedPropertyInterface = {}

            for (const propertyTypeType in assocList) {
                const property = assocList[propertyTypeType],
                    defaultPropertyValue = property.list[0]

                selectedValues[propertyTypeType] = {
                    propertyTypeName: property.propertyTypeName,
                    propertyValueId: defaultPropertyValue.id,
                    propertyValueValue: defaultPropertyValue.value,
                    costPercent: defaultPropertyValue.costPercent,
                }
            }

            onChangeValue(selectedValues)

            return selectedValues
        }),
        handleOnChange = useCallback(
            (propertyId: number, propertyTypeType: string) => {
                console.log('handleOnChange ', propertyId)

                const property = assocList[propertyTypeType].list.find(
                    property => property.id === propertyId
                )

                setSelectedValues(prevState => {
                    const newState = {
                        ...prevState,
                        [propertyTypeType]: {
                            ...prevState[propertyTypeType],
                            propertyValueId: property.id,
                            propertyValueValue: property.value,
                            costPercent: property.costPercent,
                        },
                    }
                    console.log(newState)
                    console.log(assocList)
                    onChangeValue({...newState})

                    return newState
                })
            },
            []
        )

    for (const propertyTypeType in assocList) {
        const property = assocList[propertyTypeType]

        selectList.push(
            <label
                style={{display: 'inline-block', marginRight: '16px'}}
                key={propertyTypeType}
            >
                <span style={{display: 'block', marginBottom: '.2rem'}}>
                    {property.propertyTypeName}
                </span>
                <select
                    style={{padding: '.2rem .4rem'}}
                    name={propertyTypeType}
                    value={selectedValues[propertyTypeType].propertyValueId}
                    onChange={e =>
                        handleOnChange(+e.target.value, propertyTypeType)
                    }
                >
                    {property.list.map(item => {
                        const percent =
                            item.costPercent !== null
                                ? `+${String(item.costPercent)}%`
                                : ''

                        return (
                            <option value={item.id} key={item.id}>
                                {item.value} {percent}
                            </option>
                        )
                    })}
                </select>
            </label>
        )
    }

    return <div>{selectList}</div>
}

export default Properties
