interface PropertyTypeInterface {
    type: string;
    name: string;
}

export interface OldPropertyTypeInterface extends PropertyTypeInterface {
    id: string;
}

export interface AssocListOfPropertyTypesInterface {
    [id: number]: PropertyTypeInterface;
}

export type MapOfPropertyTypeType = Map<number, PropertyTypeInterface>

export default PropertyTypeInterface
