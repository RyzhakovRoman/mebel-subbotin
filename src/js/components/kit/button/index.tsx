import * as React from 'react'
import {FunctionComponent, ReactElement, SyntheticEvent} from 'react'
import './index.less'

interface ButtonPropsInterface {
    text: string;
    onClick?: (e?: SyntheticEvent) => void;
}

const Button: FunctionComponent<ButtonPropsInterface> = ({
    text,
    onClick,
}): ReactElement => {
    return (
        <button className={'button'} onClick={onClick}>
            {text}
        </button>
    )
}

export default React.memo(Button)
