interface ProductPropertyValueInterface {
    productId: number;
    propertyValueId: number;
    productsPropertyValuesGroupId: number
    costPercent: number;
    addedCost: number;
}

export interface OldProductPropertyValueInterface {
    id: string;
    productId: string;
    propertyValueId: string;
    productsPropertyValuesGroupId: string;
    costPercent: string;
    addedCost: string;
}

export interface AssocListOfProductPropertyValuesInterface {
    [id: number]: ProductPropertyValueInterface;
}

export type MapOfProductPropertyValueType = Map<
    string,
    ProductPropertyValueInterface
>

export default ProductPropertyValueInterface
