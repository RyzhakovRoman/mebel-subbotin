import {products} from '../../models/products'
import ProductInterface from '../../types/models/product-interface'

const findProductById = (id: number): ProductInterface =>
    products.find(propertyValue => id === propertyValue.id)

export default findProductById
