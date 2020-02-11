import * as React from 'react'
import {FunctionComponent} from 'react'
import {ProductBriefInterface} from '../../../store/types/models'
import Button from '../button'
import './index.less'

interface ProductCardInterface extends ProductBriefInterface {
    j?: string; // todo - hreni
}

const ProductCard: FunctionComponent<ProductCardInterface> = ({
    name,
    imgLink,
}) => {
    return (
        <div className={'product-card'}>
            <img className={`product-card__img`} src={imgLink} alt={name} />
            <p className={`product-card__name`}>{name}</p>
            <p className={'product-card__costs'}>
                <span className={'product-card__cost'}>10 000</span>
            </p>
            <Button
                text={'Добавить в корзину'}
                className={`product-card__button`}
            />
        </div>
    )
}

export default ProductCard
