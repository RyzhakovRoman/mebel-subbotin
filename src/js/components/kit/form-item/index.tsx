import * as React from 'react'
import {FC, ReactNode} from 'react'
import './index.less'

interface FormItemPropsInterface {
    label: ReactNode;
    error?: boolean;
    required?: boolean;
    errorMsg?: string;
}

const FormItem: FC<FormItemPropsInterface> = ({
    label,
    error = false,
    required = false,
    errorMsg = 'Заполните поле',
    children,
}) => {
    return (
        <label className={'form-item'}>
            <span className={'form-item__label'}>
                {label} {required ? <i>*</i> : null}
            </span>
            {children}
            <span className={'form-item__explain'}>
                {error ? errorMsg : null}
            </span>
        </label>
    )
}

export default FormItem
