import * as React from 'react'
import {FunctionComponent} from 'react'
import './index.less'

export interface ConstPropsInterface {
    cost: string;
    className?: string;
    canceledCost?: string;
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
                <span className={'cost__canceled'}>P {canceledCost}</span>
            )}
            P {cost}
        </div>
    )
}
