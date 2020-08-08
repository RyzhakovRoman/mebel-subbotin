import * as React from 'react'
import {FC, useCallback} from 'react'
import {Link} from 'react-router-dom'
import ProductConfigurationInterface from '../../../../types/render/product-configuration-interface'
import {R} from '../../../../navigation/routes'
import './index.less'
import divideIntegerBySpace from '../../../../helpers/divide-integer-by-space'
import getPropertiesInfo from '../../../../helpers/for-cart/get-properties-info'
import {DeleteOutlined} from '@ant-design/icons/lib'
import Tooltip from 'antd/lib/tooltip'
import PlusMinus from '../../../kit/plus-minus'
import {useDispatch} from 'react-redux'
import {
    addProductToCart,
    reduceAmountProductInCart,
} from '../../../../store/actions/actionCreators/cart'

interface ProductConfigPropsInterface {
    productConfigurationIdInCart: number;
    data: ProductConfigurationInterface;
    onDelete: () => void;
}

const ProductConfig: FC<ProductConfigPropsInterface> = ({
    productConfigurationIdInCart,
    data,
    onDelete,
}) => {
    const totalSum = data.costBasedOnProperties * data.amount,
        dispatch = useDispatch(),
        handlePlus = useCallback(() => {
            dispatch(addProductToCart(data))
        }, []),
        handleMinus = useCallback(() => {
            dispatch(reduceAmountProductInCart(productConfigurationIdInCart))
        }, [])

    return (
        <div className={'product-config'}>
            <div className={'product-config__name'}>
                <Link to={`${R.CATALOG}/product-${String(data.productId)}`}>
                    {data.name}
                </Link>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <div className={'product-config__image'}>
                    <img
                        src='http://localhost:8080/dist/src/img/main-banner/5499b595352f2a0022878fa026fd5413.jpg'
                        alt=''
                    />
                </div>
                <div className={'product-config__main-properties'}>
                    <div className={'product-config__cost'}>
                        Стоимость: <b>{divideIntegerBySpace(data.cost)} ₽</b>
                    </div>
                    <div className={'product-config__amount'}>
                        Кол.:
                        <PlusMinus
                            value={data.amount}
                            onPlus={handlePlus}
                            onMinus={handleMinus}
                            className={'product-config__plus-minus'}
                        />
                    </div>
                    <div className={'product-config__total-cost'}>
                        Сумма: <b>{divideIntegerBySpace(totalSum)} ₽</b>
                    </div>
                </div>

                <div className={'product-config__properties'}>
                    {getPropertiesInfo(data.selectedProperties)}
                </div>
            </div>
            <Tooltip title={'Удалить из корзины'}>
                <DeleteOutlined
                    className={'product-config__delete'}
                    onClick={onDelete}
                />
            </Tooltip>
        </div>
    )
}

export default ProductConfig
