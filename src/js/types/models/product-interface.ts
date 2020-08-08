interface ProductInterface {
    categoryId: number;
    article: string;
    name: string;
    translit: string;
    cost: number;
    description: string;
    creationDate: string;
    canceledCost?: number;
    published?: boolean;
}

export interface OldProductInterface extends ProductInterface {
    id: number;
}

export interface AssocListOfProductsInterface {
    [id: number]: ProductInterface;
}

export type MapOfProductType = Map<number, ProductInterface>

export default ProductInterface
