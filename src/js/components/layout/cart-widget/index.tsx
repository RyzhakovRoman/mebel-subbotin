import * as React from 'react'
import {FC, useState} from 'react'
import {useSelector} from 'react-redux'
import './index.less'
import {RootStateType} from '../../../store/reducers'
import CartWidgetDropdown from './dropdown'
import divideIntegerBySpace from '../../../helpers/divide-integer-by-space'
import ProductConfigurationInterface from '../../../types/render/product-configuration-interface'
import getCost from '../../../helpers/for-product-cost/get-cost'

// todo - показывать корзину, только если навели
const CartWidget: FC = () => {
    const [hovered, setHovered] = useState<boolean>(false),
        // dispatch = useDispatch(),
        cart: ProductConfigurationInterface[] = useSelector(
            (state: RootStateType) => state.cart
        )
    let totalSum = 0

    cart.forEach(productConfiguration => {
        totalSum +=
            getCost(
                productConfiguration.cost,
                productConfiguration.assocListOfSelectedProperty
            ) * productConfiguration.amount
    })

    return (
        <div
            className={'cart-widget'}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span>Корзина</span>
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
