import products from '../../models/products'
import ProductInterface from '../../types/models/product-interface'

const findProductById = (id: number): ProductInterface => products[id]

export default findProductById
