interface CategoryInterface {
    translit: string;
    h1: string;
    nameForLink: string;
    parentCategoryId: number;
}

export interface OldCategoryInterface extends CategoryInterface {
    id: number;
}

export interface AssocListOfCategoriesInterface {
    [id: number]: CategoryInterface;
}

export type MapOfCategoryType = Map<number, CategoryInterface>

export default CategoryInterface
