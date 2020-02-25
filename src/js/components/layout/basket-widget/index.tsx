import * as React from 'react'
import {FunctionComponent, useState} from 'react'
import './index.less'

export const BasketWidget: FunctionComponent = () => {
    const [active, setActive] = useState(false)

    return (
        <div
            className={'basket-widget'}
            onMouseOver={() => setActive(true)}
            onMouseOut={() => setActive(false)}
        >
            <span>Корзина</span>
            <span className={'basket-widget__sum'}>20 000</span>
            <div
                className={`basket-widget__dropdown ${
                    active ? 'basket-widget__dropdown_active' : ''
                    // 'basket-widget__dropdown_active'
                }`}
            >
                Туту краткая информациия о том что находится в корзине!
            </div>
        </div>
    )
}
