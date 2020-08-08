import * as React from 'react'
import {FC, useCallback, useState} from 'react'
import {
    AssocListOfSelectedPropertyInterface,
    MapOfProductPropertyType,
} from '../../../../types'
import Select from 'antd/lib/select'
import 'antd/lib/select/style'
import ColorPicker from '../../../kit/color-picker'
import ColorInterface from '../../../../types/models/color-interface'
import Row from 'antd/lib/grid/row'
import Col from 'antd/lib/grid/col'

const {Option} = Select

interface PropertiesPropsInterface {
    productProperties: MapOfProductPropertyType;
    onChangeValue: (assocList: AssocListOfSelectedPropertyInterface) => void;
    onColorChange: (color: ColorInterface) => void;
}

const Properties: FC<PropertiesPropsInterface> = ({
    productProperties,
    onChangeValue,
    onColorChange,
}) => {
    const selectList = [],
        [
            selectedValues,
            setSelectedValues,
        ] = useState<AssocListOfSelectedPropertyInterface>(() => {
            // Формируем выбранные свойства по умолчанию
            const selectedValues: AssocListOfSelectedPropertyInterface = {}

            for (const [
                propertyTypeId,
                property,
            ] of productProperties.entries())
                selectedValues[
                    propertyTypeId
                ] = property.values.keys().next().value

            onChangeValue(selectedValues)
            return selectedValues
        }),
        handleOnChange = useCallback(
            (
                productPropertyValueId: number | string,
                propertyTypeId: number
            ) => {
                setSelectedValues(prevState => {
                    const newState = {
                        ...prevState,
                        [propertyTypeId]: productPropertyValueId,
                    }
                    onChangeValue({...newState})
                    return newState
                })
            },
            []
        )

    // Идем по свойствам и формируем селекты
    for (const [propertyTypeId, property] of productProperties.entries()) {
        const {values} = property,
            options = []

        property.values.entries()

        for (const [
            productPropertyValueId,
            {value, costPercent},
        ] of values.entries()) {
            options.push(
                <Option
                    value={productPropertyValueId}
                    key={productPropertyValueId}
                >
                    {value}{' '}
                    {costPercent !== null && costPercent !== 0
                        ? `+${String(costPercent)}%`
                        : ''}
                </Option>
            )
        }

        selectList.push(
            <Col xs={12} sm={24} md={24} lg={12} xl={8} key={propertyTypeId}>
                <label>
                    <span style={{display: 'block', marginBottom: '.2rem'}}>
                        {property.name}
                    </span>
                    <Select
                        style={{width: '100%'}}
                        // name={property.type}
                        value={selectedValues[propertyTypeId]}
                        onChange={value =>
                            handleOnChange(value, propertyTypeId)
                        }
                        size={'large'}
                    >
                        {options}
                    </Select>
                </label>
            </Col>
        )
    }

    return (
        <div>
            <Row gutter={[{xs: 8, sm: 16}, {sm: 12}]}>{selectList}</Row>
            <p> </p>
            <ColorPicker onChange={onColorChange} />
        </div>
    )
}

export default Properties
