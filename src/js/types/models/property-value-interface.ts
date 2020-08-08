interface PropertyValueColorAdditionalInterface {
    colorName: string;
    // colorImage?: string;
}

interface PropertyValueStandardInterface {
    propertyTypeId: number;
    value: string;
    propertyValueGroupId: number | null;
    // defaultCostPercent: number | null;
}

type AdditionalType = PropertyValueColorAdditionalInterface | null

interface PropertyValueInterface extends PropertyValueStandardInterface {
    additional?: AdditionalType;
}

export interface OldPropertyValueInterface {
    id: string;
    propertyTypeId: string;
    value: string;
    propertyValueGroupId: string | null;
    additional?: AdditionalType;
}

export interface AssocListOfPropertyValuesInterface {
    [id: number]: PropertyValueInterface;
}

export type MapOfPropertyValueType = Map<number, PropertyValueInterface>

export default PropertyValueInterface
