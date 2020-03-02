export interface ProductBriefInterface {
    id: number;
    name: string;
    imgLink: string;
    cost?: string;
}

export interface ProductInterface extends ProductBriefInterface {
    a?: string;
}
