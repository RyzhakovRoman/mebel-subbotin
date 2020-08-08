/* eslint-disable @typescript-eslint/indent */
export interface PropertyValueGroupInterface {
    arrayOfPropertyValueId: number[];
    name: string;
}

export type MapOfPropertyValueGroupType = Map<
    number,
    PropertyValueGroupInterface
>
