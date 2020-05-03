import * as React from 'react'
import {FC} from 'react'
import Button from '../button'
import './index.less'
import {ProductInterface} from '../../../types/models/product-interface'
import {Link} from 'react-router-dom'
import {R} from '../../../navigation/routes'
import {useDispatch} from 'react-redux'
// import {getMainImage} from '../../../helpers/get-main-image'

interface ProductCardInterface {
    product: ProductInterface;
}

const ProductCard: FC<ProductCardInterface> = ({
    product,
    product: {name, cost, id},
}) => {
    const dispatch = useDispatch()
    // const productUri = getMainImage(product)?.uri
    // todo - Убрать заглушку!
    return (
        <div className={'product-card'}>
            <img
                className={`product-card__img`}
                src={'/src/img/products/0/1.jpg'}
                alt={name}
            />
            <Link
                to={`${R.CATALOG}/product-${id}`}
                className={`product-card__name`}
            >
                {name}
            </Link>
            <p className={'product-card__costs'}>
                <span className={'product-card__cost'}>{cost} ₽</span>
            </p>
            <Link
                className={`button product-card__button`}
                to={`${R.CATALOG}/product-${id}`}
            >
                Подробнее
            </Link>
        </div>
    )
}

export default ProductCard
