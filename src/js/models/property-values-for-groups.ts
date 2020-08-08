import arrayToAssocList from '../helpers/array-to-assoc-list'
import {
    AssocListOfPropertyValueForGroupInterface,
    PropertyValueForGroupForArrayInterface,
} from '../types/models/property-value-for-group-interface'

const productsPropertyValuesForGroups: PropertyValueForGroupForArrayInterface[] = [
    {
        id: '1',
        productsPropertyValuesGroupId: '1',
        propertyValueId: '16',
        costPercent: null,
        addedCost: null,
    },
    {
        id: '2',
        productsPropertyValuesGroupId: '1',
        propertyValueId: '17',
        costPercent: '50',
        addedCost: null,
    },
    {
        id: '3',
        productsPropertyValuesGroupId: '1',
        propertyValueId: '18',
        costPercent: '100',
        addedCost: null,
    },
]

// eslint-disable-next-line
const assocListOfPropertyValueForGroup: AssocListOfPropertyValueForGroupInterface = arrayToAssocList(
    productsPropertyValuesForGroups
)

export default assocListOfPropertyValueForGroup
