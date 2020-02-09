import * as React from 'react'
import {ReactElement} from 'react'
import './index.less'

function Container({children}): ReactElement {
    return <div className={'container'}>{children}</div>
}

export default Container
