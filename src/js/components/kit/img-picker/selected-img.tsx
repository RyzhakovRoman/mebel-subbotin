import * as React from 'react'
import {ReactElement, useState} from 'react'
import './index.less'

interface SelectedImgPropsInterface {
    url: string;
}

const scaleValue = 2

export default function SelectedImg({
    url,
}: SelectedImgPropsInterface): ReactElement {
    const [{x, y}, setTranslate] = useState({x: 0, y: 0}),
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        translate = `translate3d(${x}px, ${y}px, 0px) ${
            x !== 0 || y !== 0 ? `scale(${scaleValue.toString()})` : ''
        }`,
        handleMouseMove = (e): void => {
            const rect = e.target.parentNode.getBoundingClientRect(),
                x = -(e.pageX - rect.x - rect.width / scaleValue),
                y = -(
                    e.pageY -
                    (rect.y + window.scrollY) -
                    rect.height / scaleValue
                )
            setTranslate({x, y})
        },
        handleMouseOut = (e): void => {
            setTranslate({x: 0, y: 0})
        }

    return (
        <div
            id={'i'}
            className={'img-picker__img-wrapper'}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
        >
            <img
                style={{transform: translate}}
                className={'img-picker__img'}
                src={url}
                alt={'Изображение продукта'}
            />
        </div>
    )
}
