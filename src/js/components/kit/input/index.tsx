import * as React from 'react'
import {ChangeEvent, FC} from 'react'
import './index.less'

interface InputPropsInterface {
    value?: string;
    error?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputPropsInterface> = ({value, error, onChange}) => {
    return (
        <input
            className={`input${error ? ' input_error' : ''}`}
            value={value}
            onChange={onChange}
        />
    )
}

export default React.memo(Input)
