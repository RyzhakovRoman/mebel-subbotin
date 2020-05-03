import * as React from 'react'
import {FunctionComponent} from 'react'
import './index.less'
import divideIntegerBySpace from '../../../helpers/divide-integer-by-space'

export interface ConstPropsInterface {
    cost: number;
    className?: string;
    canceledCost?: number;
}

export const Cost: FunctionComponent<ConstPropsInterface> = ({
    cost,
    className,
    canceledCost,
}) => {
    return (
        <div className={'cost ' + className}>
            {/* eslint-disable-next-line @typescript-eslint/strict-boolean-expressions */}
            {canceledCost && (
                <span className={'cost__canceled'}>₽ {canceledCost}</span>
            )}
            ₽ {divideIntegerBySpace(cost)}
        </div>
    )
}
