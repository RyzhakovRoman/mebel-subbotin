import ProductPropertyValueInterface from '../types/models/product-property-value-interface'

export const productsPropertyValues: ProductPropertyValueInterface[] = [
    /*
        Для продукта 2
        значения размеров
     */
    {
        id: 0,
        productId: 2,
        propertyValueId: 0,
        costPercent: null,
    },
    {
        id: 1,
        productId: 2,
        propertyValueId: 1,
        costPercent: 10,
    },
    {
        id: 2,
        productId: 2,
        propertyValueId: 2,
        costPercent: 14,
    },
    /*
        Для продукта 2
        значения цветов
     */
    {
        id: 3,
        productId: 2,
        propertyValueId: 7,
        costPercent: 2,
    },
    {
        id: 4,
        productId: 2,
        propertyValueId: 8,
        costPercent: null,
    },
    {
        id: 5,
        productId: 2,
        propertyValueId: 9,
        costPercent: 25,
    },
]
