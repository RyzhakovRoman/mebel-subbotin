import * as React from 'react'
import {FC} from 'react'
import './index.less'

interface IconPropsInterface {
    name: string;
}

const Icon: FC<IconPropsInterface> = ({name}) => {
    return <div className={`icon icon_${name}`} />
}

export default Icon
