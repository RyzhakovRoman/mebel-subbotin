import {ProductInterface} from '../types/models/product-interface'
import {productsBeds} from './products/products-beds'
import {productsTables} from './products/products-tables'
import {productsChairs} from './products/products-chairs'
import {productsBedsideTables} from './products/products-bedside-tables'
import {productsWardrobes} from './products/products-wardrobes'

export const products: ProductInterface[] = [
    ...productsBeds,
    ...productsTables,
    ...productsChairs,
    ...productsBedsideTables,
    ...productsWardrobes,
]

// eslint-disable-next-line one-var
const ids = new Set()
let maxId = 0
products.forEach((product, i) => {
    const prevLength = ids.size
    ids.add(product.id)
    // Значит айдишник не уникален
    if (ids.size === prevLength)
        console.warn('ID продукта не уникален! ', product.id)
    if (product.id > maxId) maxId = product.id
})
console.warn('Последний ID продукта ', maxId)
