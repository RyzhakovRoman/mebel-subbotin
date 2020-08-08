import {MapOfPropertyValueGroupType} from '../types/models/property-value-group-interface'

const propertyValueGroups: MapOfPropertyValueGroupType = new Map()
// getId = (): number => propertyValueGroups.size + 1

propertyValueGroups.set(0, {
    arrayOfPropertyValueId: [7, 8, 9],
    name: 'Все цвета эмали',
})

// propertyValueGroups.set(1, {
//     arrayOfPropertyValueId: [0, 1, 2, 3, 4, 5, 6],
//     name: 'Все размеры кроватей',
// })

export default propertyValueGroups
