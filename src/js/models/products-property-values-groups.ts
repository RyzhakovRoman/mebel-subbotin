import {
    AssocListOfProductPropertyValueGroupInterface,
    ProductPropertyValueGroupForArrayInterface,
} from '../types/models/product-property-value-group-interface'
import arrayToAssocList from '../helpers/array-to-assoc-list'

const productsPropertyValuesGroups: ProductPropertyValueGroupForArrayInterface[] = [
    {id: '1', name: 'Все материалы'},
    {id: '2', name: 'Все цвета эмалей'},
]

// eslint-disable-next-line
const assocListOfProductPropertyValueGroup: AssocListOfProductPropertyValueGroupInterface = arrayToAssocList(
    productsPropertyValuesGroups
)

export default assocListOfProductPropertyValueGroup
