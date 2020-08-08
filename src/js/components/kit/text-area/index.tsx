import * as React from 'react'
import {FC, ChangeEvent} from 'react'
import './index.less'

interface TextAreaPropsInterface {
    value?: string;
    error?: boolean;
    rows?: number;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<TextAreaPropsInterface> = ({
    value,
    error,
    rows = 3,
    onChange,
}) => {
    return (
        <textarea
            className={`textarea${error ? ' textarea_error' : ''}`}
            rows={3}
            value={value}
            onChange={onChange}
        />
    )
}

export default React.memo(TextArea)
