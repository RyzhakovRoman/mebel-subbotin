import * as React from 'react'
import {FC, useState} from 'react'
import {useSelector} from 'react-redux'
import {RootStateType} from '../../../store/reducers'
import ProductConfigurationInterface from '../../../types/render/product-configuration-interface'
import CartWidgetDropdown from './dropdown'
import divideIntegerBySpace from '../../../helpers/divide-integer-by-space'
import './index.less'
import {ShoppingCartOutlined} from '@ant-design/icons/lib'
import {Link} from 'react-router-dom'
import {R} from '../../../navigation/routes'

// todo - показывать корзину, только если навели
const CartWidget: FC = () => {
    const [hovered, setHovered] = useState<boolean>(false),
        cart: ProductConfigurationInterface[] = useSelector(
            (state: RootStateType) => state.cart
        )
    let totalSum = 0

    cart.forEach(productConfiguration => {
        totalSum +=
            productConfiguration.costBasedOnProperties *
            productConfiguration.amount
    })

    return (
        <div
            className={'cart-widget'}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link to={R.CART} style={{color: 'inherit'}}>
                <ShoppingCartOutlined
                    style={{
                        fontSize: '2.25rem',
                        display: 'block',
                        margin: '0 auto',
                    }}
                />
                <span>Корзина</span>
            </Link>
            <CartWidgetDropdown
                active={hovered}
                productConfigurationList={cart}
                totalSum={totalSum}
            />
            <span className={'cart-widget__sum'}>
                {divideIntegerBySpace(totalSum)} ₽
            </span>
        </div>
    )
}

export default CartWidget
