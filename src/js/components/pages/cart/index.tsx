import * as React from 'react'
import {FC} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Container from '../../layout/container'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import './index.less'
import {RootStateType} from '../../../store/reducers'
import OrderSection from './order-section/index'
import ProductConfig from './product-config'
import divideIntegerBySpace from '../../../helpers/divide-integer-by-space'
import {R} from '../../../navigation/routes'
import {deleteProductFromCart} from '../../../store/actions/actionCreators/cart'
import BreadCrumbs, {RouteInfo} from '../../layout/bread-crumbs'

const HEADING = 'Моя корзина',
    listOfRoute: RouteInfo[] = [
        {
            to: R.CART,
            name: HEADING,
        },
    ]

// todo - Кнопка обновить корзину! и работа с несколькими вкладками

const Cart: FC = () => {
    const dispatch = useDispatch(),
        cart = useSelector((state: RootStateType) => state.cart)

    let totalSum: number = 0

    return (
        <Container>
            <BreadCrumbs listOfRoutes={listOfRoute} />

            <h1 className={'heading heading_1'}>{HEADING}</h1>

            {cart.length === 0 ? (
                <div className={'text_large'}>
                    Корзина пуста, Вы можете{' '}
                    <Link to={R.CATALOG}>перейти в каталог</Link>
                </div>
            ) : null}

            <Row
                gutter={[
                    {sm: 16, xl: 24},
                    {xs: 12, sm: 16, xl: 24},
                ]}
            >
                {cart.map((productConfig, i) => {
                    totalSum +=
                        productConfig.costBasedOnProperties *
                        productConfig.amount

                    return (
                        <Col
                            sm={24}
                            md={12}
                            xl={8}
                            className={'cart__product-config-col'}
                            key={i}
                        >
                            <ProductConfig
                                productConfigurationIdInCart={i}
                                data={productConfig}
                                onDelete={() => {
                                    dispatch(deleteProductFromCart(i))
                                }}
                            />
                        </Col>
                    )
                })}
            </Row>

            <div className={'total-sum'}>
                <div className={'total-sum__label'}>Итоговая сумма заказа</div>
                <div className={'total-sum__cost'}>
                    {divideIntegerBySpace(totalSum)} ₽
                </div>
            </div>

            <OrderSection />
        </Container>
    )
}

export default Cart
