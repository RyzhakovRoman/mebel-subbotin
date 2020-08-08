interface ImageInterface {
    productId: number;
    uri: string;
    isMain: boolean;
}

export interface OldImageInterface extends ImageInterface {
    id: number;
}

export interface AssocListOfImagesInterface {
    [id: number]: ImageInterface;
}

export default ImageInterface
