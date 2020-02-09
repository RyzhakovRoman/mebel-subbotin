import * as React from 'react'
import {FunctionComponent} from 'react'
import {ProductBriefInterface} from '../../../store/types/models'

interface ProductCardInterface extends ProductBriefInterface {
    j?: string; // todo - hreni
}

const ProductCard: FunctionComponent<ProductCardInterface> = ({
    name,
    imgLink,
}) => {
    console.log(name, imgLink)
    return (
        <div>
            <p>{name}</p>
            <p>{imgLink}</p>
        </div>
    )
}

export default ProductCard
