import PropertyValueInterface from '../../types/models/property-value-interface'
import {propertyValues} from '../../models/property-values'

const findPropertyValueById = (id: number): PropertyValueInterface =>
    propertyValues.find(propertyValue => id === propertyValue.id)

export default findPropertyValueById
