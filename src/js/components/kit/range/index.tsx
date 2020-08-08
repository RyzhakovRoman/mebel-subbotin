import * as React from 'react'
import {FunctionComponent, useState} from 'react'
import './index.less'

export const Range: FunctionComponent = () => {
    const [leftDrawerActive, setLeftDrawerActive] = useState(false),
        [rightDrawerActive, setRightDrawerActive] = useState(false),
        [leftDrawerPosition, setLeftDrawerPosition] = useState(0),
        [rightDrawerPosition, setRightDrawerPosition] = useState(100)

    console.log(leftDrawerActive, leftDrawerPosition)

    return (
        <div className={'range'}>
            {/*<div*/}
            {/*    className={'range__drawer'}*/}
            {/*    style={{*/}
            {/*        transform: `translate3d(${leftDrawerPosition}px, -.45rem, 0)`,*/}
            {/*    }}*/}
            {/*    onMouseDown={() => setLeftDrawerActive(true)}*/}
            {/*    onMouseUp={() => setLeftDrawerActive(false)}*/}
            {/*    onMouseMove={e => {*/}
            {/*        console.log(e.target.parentNode.getBoundingClientRect())*/}
            {/*        if (leftDrawerActive)*/}
            {/*            setLeftDrawerPosition(leftDrawerPosition + 10)*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<div className={'range__line'} />*/}
            {/*<div className={'range__drawer'} />*/}
        </div>
    )
}
