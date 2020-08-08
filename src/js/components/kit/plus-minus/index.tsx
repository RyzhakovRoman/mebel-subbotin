import * as React from 'react'
import {FC} from 'react'
import './index.less'

interface PlusMinusPropsInterface {
    value: number;
    onPlus: () => void;
    onMinus: () => void;
    className?: string;
}

const PlusMinus: FC<PlusMinusPropsInterface> = ({
    value = 0,
    onPlus,
    onMinus,
    className = '',
}) => {
    return (
        <div className={'plus-minus ' + className}>
            <div
                className={'plus-minus__item plus-minus__item_minus'}
                onClick={onMinus}
            >
                -
            </div>
            <div className={'plus-minus__number'}>{value} шт.</div>
            <div className={'plus-minus__item'} onClick={onPlus}>
                +
            </div>
        </div>
    )
}

export default PlusMinus
