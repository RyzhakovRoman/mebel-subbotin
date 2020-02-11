import * as React from 'react'
import {FunctionComponent} from 'react'
import {ProductBriefInterface} from '../../../store/types/models'
import Button from '../button'
import './index.less'

interface ProductCardInterface extends ProductBriefInterface {
    j?: string; // todo - hreni
}

const blockName = 'product-card',
    ProductCard: FunctionComponent<ProductCardInterface> = ({
        name,
        imgLink,
    }) => {
        return (
            <div className={blockName}>
                <img className={`${blockName}__img`} src={imgLink} alt={name} />
                <p className={`${blockName}__name`}>{name}</p>
                <p>10 000 руб.</p>
                <Button
                    text={'Добавить в корзину'}
                    className={`${blockName}__button`}
                />
            </div>
        )
    }

export default ProductCard
