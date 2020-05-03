import {ImageInterface} from '../types/models/image-interface'

export const images: ImageInterface[] = [
    /*
        Для продукта с id 0
     */
    {
        id: 0,
        productId: 0,
        uri: '/src/img/products/0/0.jpg',
        isMain: false,
    },
    {
        id: 1,
        productId: 0,
        uri: '/src/img/products/0/1.jpg',
        isMain: true,
    },
    /*
        Для продукта с id 1
     */
    {
        id: 2,
        productId: 1,
        uri: '/src/img/products/0/1.jpg',
        isMain: true,
    },
    /*
        Для продукта с id 2
     */
    {
        id: 3,
        productId: 2,
        uri: '/src/img/products/0/1.jpg',
        isMain: true,
    },
    /*
        Для продукта с id 3
     */
    {
        id: 4,
        productId: 3,
        uri: '/src/img/products/0/1.jpg',
        isMain: true,
    },
]
