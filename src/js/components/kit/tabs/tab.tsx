import * as React from 'react'
import {FunctionComponent} from 'react'
import './index.less'

interface TabPropsInterface {
    name: string;
    isActive: boolean;
    className?: string;
    onClick?: any; // todo - Исправить как будет интрент
}

export const Tab: FunctionComponent<TabPropsInterface> = ({
    name,
    isActive,
    className,
    onClick,
}) => {
    return (
        <div
            className={`tab${isActive ? ' tab_active' : ''} ${className || ''}`}
            onClick={onClick}
        >
            {name}
        </div>
    )
}
