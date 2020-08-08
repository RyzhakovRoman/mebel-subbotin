import {
    AssocListOfPropertyValuesInterface,
    OldPropertyValueInterface,
} from '../types/models/property-value-interface'
import arrayToAssocList from '../helpers/array-to-assoc-list'
const propertyValues: OldPropertyValueInterface[] = [
    {
        id: '1',
        propertyTypeId: '2',
        propertyValueGroupId: null,
        value: '90 x 200 см',
        additional: null,
    },
    {
        id: '2',
        propertyTypeId: '2',
        propertyValueGroupId: null,
        value: '120 x 200 см',
        additional: null,
    },
    {
        id: '3',
        propertyTypeId: '2',
        propertyValueGroupId: null,
        value: '140 x 200 см',
        additional: null,
    },
    {
        id: '4',
        propertyTypeId: '2',
        propertyValueGroupId: null,
        value: '160 x 200 см',
        additional: null,
    },
    {
        id: '5',
        propertyTypeId: '2',
        propertyValueGroupId: null,
        value: '180 x 200 см',
        additional: null,
    },
    {
        id: '6',
        propertyTypeId: '2',
        propertyValueGroupId: null,
        value: '200 x 200 см',
        additional: null,
    },
    {
        id: '7',
        propertyTypeId: '4',
        propertyValueGroupId: null,
        value: 'С дверкой',
        additional: null,
    },
    {
        id: '8',
        propertyTypeId: '4',
        propertyValueGroupId: null,
        value: 'С ящиками',
        additional: null,
    },
    {
        id: '9',
        propertyTypeId: '6',
        propertyValueGroupId: null,
        value: 'Нераздвижной',
        additional: null,
    },
    {
        id: '10',
        propertyTypeId: '6',
        propertyValueGroupId: null,
        value: 'Раздвижной',
        additional: null,
    },
    {
        id: '11',
        propertyTypeId: '5',
        propertyValueGroupId: null,
        value: '46x30x55',
        additional: null,
    },
    {
        id: '12',
        propertyTypeId: '5',
        propertyValueGroupId: null,
        value: '45x30x55',
        additional: null,
    },
    {
        id: '13',
        propertyTypeId: '5',
        propertyValueGroupId: null,
        value: '90x240x60',
        additional: null,
    },
    {
        id: '14',
        propertyTypeId: '7',
        propertyValueGroupId: null,
        value: 'Жесткий',
        additional: null,
    },
    {
        id: '15',
        propertyTypeId: '7',
        propertyValueGroupId: null,
        value: 'Мягкий',
        additional: null,
    },
    {
        id: '16',
        propertyTypeId: '8',
        propertyValueGroupId: null,
        value: 'Сосна',
        additional: null,
    },
    {
        id: '17',
        propertyTypeId: '8',
        propertyValueGroupId: null,
        value: 'Берёза',
        additional: null,
    },
    {
        id: '18',
        propertyTypeId: '8',
        propertyValueGroupId: null,
        value: 'Бук',
        additional: null,
    },
]

// eslint-disable-next-line
const assocListOfPropertyValue: AssocListOfPropertyValuesInterface = arrayToAssocList(
    propertyValues
)

// console.log()
// const ids = Object.keys(propertyValues)
// // @ts-ignore
// console.log('Последний id для propertyValues ', Math.max(...ids))

export default assocListOfPropertyValue
