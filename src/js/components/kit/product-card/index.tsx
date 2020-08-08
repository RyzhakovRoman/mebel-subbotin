import * as React from 'react'
import {FC} from 'react'
import './index.less'
import ProductInterface from '../../../types/models/product-interface'
import {Link} from 'react-router-dom'
import {R} from '../../../navigation/routes'
import divideIntegerBySpace from '../../../helpers/divide-integer-by-space'
// import {getMainImage} from '../../../helpers/get-main-image'

interface ProductCardInterface {
    imgSrc: string;
    productInfo: [number, ProductInterface];
}

const ProductCard: FC<ProductCardInterface> = ({
    imgSrc = '/src/img/products/0/1.jpg',
    productInfo: [productId, product],
}) => {
    // const productUri = getMainImage(product)?.uri
    // todo - Убрать заглушку!
    return (
        <div className={'product-card'}>
            <div className={'product-card__img-cont'}>
                <div className={'product-card__img-wrapper'}>
                    <img
                        className={`product-card__img`}
                        src={imgSrc}
                        alt={product.name}
                    />
                </div>
            </div>
            <Link
                to={`${R.CATALOG}/product-${String(productId)}`}
                className={`product-card__name`}
            >
                {product.name}
            </Link>
            <p className={'product-card__costs'}>
                <span className={'product-card__cost'}>
                    {divideIntegerBySpace(product.cost)} ₽
                </span>
            </p>
            <div className={'product-card__actions'}>
                <Link
                    className={`button product-card__button`}
                    to={`${R.CATALOG}/product-${String(productId)}`}
                >
                    Подробнее
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
