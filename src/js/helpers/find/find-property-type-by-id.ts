import {propertyTypes} from '../../models/property-types'
import PropertyTypeInterface from '../../types/models/property-type-interface'

const findPropertyTypeById = (id: number): PropertyTypeInterface =>
    propertyTypes.find(propertyValue => id === propertyValue.id)

export default findPropertyTypeById
