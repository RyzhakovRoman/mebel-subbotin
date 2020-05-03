interface ProductInterface {
    id: number;
    categoryId: number;
    article: string;
    name: string;
    translit: string;
    cost: number;
    description: string;
    creationDate: string;
    canceledCost?: number;
}

export default ProductInterface
