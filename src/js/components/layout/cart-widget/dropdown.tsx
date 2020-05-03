import * as React from 'react'
import {FC} from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from '../../kit/button'
import getCost from '../../../helpers/for-product-cost/get-cost'
import {R} from '../../../navigation/routes'
import divideIntegerBySpace from '../../../helpers/divide-integer-by-space'
import {deleteProductFromCart} from '../../../store/actions/actionCreators/cart'
import ProductConfigurationInterface from '../../../types/render/product-configuration-interface'
import getPropertiesInfo from '../../../helpers/for-cart/get-properties-info'

interface CartWidgetDropdownInterface {
    active: boolean;
    productConfigurationList: ProductConfigurationInterface[];
    totalSum: number;
}

const CartWidgetDropdown: FC<CartWidgetDropdownInterface> = ({
    active,
    productConfigurationList,
    totalSum,
}) => {
    const dispatch = useDispatch()

    return (
        <ul
            className={`cart-widget__dropdown ${
                active ? 'cart-widget__dropdown_active' : ''
            }`}
        >
            {productConfigurationList.length > 0 ? (
                <>
                    {productConfigurationList.map((product, i) => {
                        const cost =
                            getCost(
                                product.cost,
                                product.assocListOfSelectedProperty
                            ) * product.amount

                        return (
                            <li className={'cart-widget__product'} key={i}>
                                <div
                                    className={
                                        'cart-widget__product-link-and-cost text_large'
                                    }
                                >
                                    <div>
                                        <Link
                                            className={
                                                'cart-widget__product-link'
                                            }
                                            to={`${R.CATALOG}/product-${String(
                                                product.id
                                            )}`}
                                        >
                                            {product.name}
                                        </Link>
                                        &nbsp;-&nbsp;
                                        {divideIntegerBySpace(cost)} ₽ (
                                        {product.amount}шт.)
                                    </div>
                                    <div className={'cart-widget__properties'}>
                                        {getPropertiesInfo(product)}
                                    </div>
                                </div>
                                <span
                                    className={'cart-widget__delete'}
                                    onClick={() => {
                                        dispatch(deleteProductFromCart(i))
                                    }}
                                >
                                    удалить
                                </span>
                            </li>
                        )
                    })}
                </>
            ) : (
                <li>Нет товаров</li>
            )}
            {productConfigurationList.length > 0 ? (
                <li className={'cart-widget__footer text_large'} key={'footer'}>
                    Итого:{' '}
                    <span style={{fontWeight: 'bold'}}>
                        {divideIntegerBySpace(totalSum)} ₽
                    </span>
                    <div className={'cart-widget__actions'}>
                        <Button
                            className={'button_primary'}
                            text={'Перейти к оформлению'}
                        />
                    </div>
                </li>
            ) : null}
        </ul>
    )
}

export default CartWidgetDropdown
