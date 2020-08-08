import {UpOutlined} from '@ant-design/icons/lib'
import * as React from 'react'
import {useEffect, FC, useCallback, useState} from 'react'
import './index.less'

const ButtonToTop: FC = () => {
    const [show, setShow] = useState<boolean>(false),
        scrollWindow = useCallback(() => {
            window.scrollTo(0, 0)
        }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100 && show === false) setShow(true)
            else if (window.scrollY < 100 && show === true) setShow(false)
        })
    }, [show])

    return (
        <div
            className={`button-to-top ${show ? 'button-to-top_show' : ''}`}
            onClick={scrollWindow}
        >
            <UpOutlined />
        </div>
    )
}

export default ButtonToTop
