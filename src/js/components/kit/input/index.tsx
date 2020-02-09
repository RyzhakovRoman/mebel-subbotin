import * as React from 'react'
import {FunctionComponent, ReactElement} from 'react'
import './index.less'

interface InputPropsInterface {
    value: string;
}

const Input: FunctionComponent<InputPropsInterface> = ({
    value,
}): ReactElement => {
    return <input className={'input'} value={value} />
}

export default React.memo(Input)
