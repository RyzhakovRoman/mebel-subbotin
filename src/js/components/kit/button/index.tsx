import * as React from 'react'
import {FunctionComponent, ReactElement, ReactNode, SyntheticEvent} from 'react'
import './index.less'

interface ButtonPropsInterface {
    text: ReactNode;
    className?: string;
    onClick?: (e?: SyntheticEvent) => void;
}

const Button: FunctionComponent<ButtonPropsInterface> = ({
    text,
    className,
    onClick,
}): ReactElement => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default React.memo(Button)
