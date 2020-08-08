import * as React from 'react'
import {FC} from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import Tooltip from 'antd/lib/tooltip'
import 'antd/lib/tooltip/style'
import {R} from '../../../navigation/routes'
import divideIntegerBySpace from '../../../helpers/divide-integer-by-space'
import {deleteProductFromCart} from '../../../store/actions/actionCreators/cart'
import ProductConfigurationInterface from '../../../types/render/product-configuration-interface'
import getPropertiesInfo from '../../../helpers/for-cart/get-properties-info'
import {DeleteOutlined, ShoppingOutlined} from '@ant-design/icons/lib'

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
                    {productConfigurationList.map(
                        (
                            {
                                productId,
                                name,
                                selectedProperties,
                                amount,
                                costBasedOnProperties,
                            },
                            i
                        ) => {
                            const cost = costBasedOnProperties * amount

                            return (
                                <li className={'cart-widget__product'} key={i}>
                                    <div
                                        className={
                                            'cart-widget__product-link-and-cost text_large'
                                        }
                                    >
                                        <div
                                            className={'cart-widget__img-cont'}
                                        >
                                            <div
                                                className={
                                                    'cart-widget__img-wrapper'
                                                }
                                            >
                                                <img
                                                    className={
                                                        'cart-widget__img'
                                                    }
                                                    src='/src/img/products/fake/krovat.jpg'
                                                    alt=''
                                                />
                                            </div>
                                        </div>
                                        <div style={{width: '80%'}}>
                                            <Link
                                                className={
                                                    'cart-widget__product-link'
                                                }
                                                to={`${
                                                    R.CATALOG
                                                }/product-${String(productId)}`}
                                            >
                                                {name}
                                            </Link>
                                            &nbsp;-&nbsp;
                                            {divideIntegerBySpace(cost)} ₽ (
                                            {amount}шт.)
                                            <div
                                                className={
                                                    'cart-widget__properties'
                                                }
                                            >
                                                {getPropertiesInfo(
                                                    selectedProperties
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <Tooltip title={'Удалить из корзины'}>
                                        <DeleteOutlined
                                            className={'cart-widget__delete'}
                                            onClick={() => {
                                                dispatch(
                                                    deleteProductFromCart(i)
                                                )
                                            }}
                                        />
                                    </Tooltip>
                                </li>
                            )
                        }
                    )}
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
                        <Link
                            to={R.CART}
                            className={
                                'button button_primary cart-widget__link-to-cart'
                            }
                        >
                            Перейти к оформлению{' '}
                            <ShoppingOutlined
                                style={{
                                    fontSize: '1.1rem',
                                    marginLeft: '0.3rem',
                                    marginTop: '-.2rem',
                                }}
                            />
                        </Link>
                    </div>
                </li>
            ) : null}
        </ul>
    )
}

export default CartWidgetDropdown
