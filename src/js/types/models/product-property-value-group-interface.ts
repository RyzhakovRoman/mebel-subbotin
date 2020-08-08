interface ProductPropertyValueGroupInterface {
    name: string;
}

export interface ProductPropertyValueGroupForArrayInterface
    extends ProductPropertyValueGroupInterface {
    id: string;
}

export interface AssocListOfProductPropertyValueGroupInterface {
    [id: number]: ProductPropertyValueGroupInterface;
}

export type MapOfProductPropertyValueGroupType = Map<
    number,
    ProductPropertyValueGroupInterface
>

export default ProductPropertyValueGroupInterface
