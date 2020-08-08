interface PropertyValueForGroupInterface {
    productsPropertyValuesGroupId: number;
    propertyValueId: number;
    costPercent: number | null;
    addedCost: number | null;
}

export interface PropertyValueForGroupForArrayInterface {
    id: string;
    productsPropertyValuesGroupId: string;
    propertyValueId: string;
    costPercent: string | null;
    addedCost: string | null;
}

export interface AssocListOfPropertyValueForGroupInterface {
    [id: number]: PropertyValueForGroupInterface;
}

export type MapOfProductPropertyValueGroupType = Map<
    number,
    PropertyValueForGroupInterface
>

export default PropertyValueForGroupInterface
