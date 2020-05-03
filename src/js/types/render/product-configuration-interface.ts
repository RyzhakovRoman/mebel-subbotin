import ProductInterface from '../models/product-interface'
import SelectedPropertyInterface from './selected-property-interface'

export interface AssocListOfSelectedPropertyInterface {
    [propertyTypeType: string]: SelectedPropertyInterface;
}

interface ProductConfigurationInterface extends ProductInterface {
    assocListOfSelectedProperty: AssocListOfSelectedPropertyInterface;
    amount: number;
}

export default ProductConfigurationInterface
