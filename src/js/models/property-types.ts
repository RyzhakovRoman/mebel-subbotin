import arrayToAssocList from '../helpers/array-to-assoc-list'
import {
    AssocListOfPropertyTypesInterface,
    OldPropertyTypeInterface,
} from '../types/models/property-type-interface'

const propertyTypes: OldPropertyTypeInterface[] = [
    {id: '2', type: 'size-for-bed', name: 'Размер'},
    {id: '3', type: 'color', name: 'Цвет'},
    {id: '4', type: 'bedside-tables-mode', name: 'Модификация тумбы'},
    {id: '5', type: 'overall-size', name: 'Габариты, см (ШхВхГ)'},
    {id: '6', type: 'tables-mode', name: 'Модификация стола'},
    {id: '7', type: 'chair-mode', name: 'Модификация стула'},
    {id: '8', type: 'material', name: 'Материал'},
]

// eslint-disable-next-line
const assocListOfPropertyTypes: AssocListOfPropertyTypesInterface = arrayToAssocList(
    propertyTypes
)

export default assocListOfPropertyTypes
