/* eslint-disable @typescript-eslint/indent */
import ProductPropertyValueInterface from './models/product-property-value-interface'
import PropertyValueInterface from './models/property-value-interface'
import PropertyTypeInterface from './models/property-type-interface'

export type RequestStatusType = 'didNotLoad' | 'started' | 'success' | 'error'

export interface PaginationInterface {
    start: number;
    limit: number;
}

export type SortingType = 'desc' | 'asc' | ''

export interface ProductPropertyValueAndPropertyValue
    extends ProductPropertyValueInterface,
        PropertyValueInterface {}

// Ключ в мапе это id от ProductPropertyValueInterface или составной с группой
export type MapOfProductPropertyValueAndPropertyValueType = Map<
    number | string,
    ProductPropertyValueAndPropertyValue
>

export interface ProductPropertyInterface extends PropertyTypeInterface {
    values: MapOfProductPropertyValueAndPropertyValueType;
}

// Ключ в мапе это id от PropertyType
export type MapOfProductPropertyType = Map<number, ProductPropertyInterface>

export interface AssocListOfSelectedPropertyInterface {
    // Id типа свойства = id значению свойства продукта
    [propertyTypeId: string]: number;
}
