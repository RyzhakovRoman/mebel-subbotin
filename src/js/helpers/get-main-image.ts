import {ProductInterface} from '../types/models/product-interface'
import {images} from '../models/images'
import {ImageInterface} from '../types/models/image-interface'

export function getMainImage(product: ProductInterface): ImageInterface {
    return images.find(image => image.productId === product.id && image.isMain)
}
