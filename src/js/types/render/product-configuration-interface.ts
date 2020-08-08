import ProductInterface from '../models/product-interface'
import ColorInterface from '../models/color-interface'

interface SelectedPropertyInfoInterface {
    propertyTypeName: string;
    propertyValueValue: string | ColorInterface;
    propertyTypeType: string;
}

// Ключ это id типа свойства
export type MapOfSelectedPropertyInfoType = Map<
    number | string,
    SelectedPropertyInfoInterface
>

interface ProductConfigurationInterface extends ProductInterface {
    productId: number;
    selectedProperties: MapOfSelectedPropertyInfoType;
    costBasedOnProperties: number;
    amount: number;
}

export default ProductConfigurationInterface
