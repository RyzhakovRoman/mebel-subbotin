import * as React from 'react'
import {ReactElement, useEffect, useMemo, useRef, useState} from 'react'
import './index.less'

interface SelectedImgPropsInterface {
    url: string;
}

const scaleValue = 2,
    getTransformString = (x: number, y: number): string => {
        return `transform: translate3d(${String(x)}px, ${String(y)}px, 0px) ${
            x !== 0 || y !== 0 ? `scale(${scaleValue.toString()})` : ''
        }`
    }

export default function SelectedImg({
    url,
}: SelectedImgPropsInterface): ReactElement {
    const imgRef = useRef(),
        [rect, setRect] = useState(),
        handleMouseMove = (e): void => {
            const x = -(e.pageX - rect.x - rect.width / scaleValue),
                y = -(
                    e.pageY -
                    (rect.y + window.scrollY) -
                    rect.height / scaleValue
                )

            // @ts-ignore
            imgRef.current.style = getTransformString(x, y)
        },
        handleMouseOut = (): void => {
            const x = 0,
                y = 0

            // @ts-ignore
            imgRef.current.style = getTransformString(x, y)
        }

    useEffect(() => {
        const rect = document
            .getElementsByClassName('img-picker__img-wrapper')[0]
            .getBoundingClientRect()
        setRect(rect)
    }, [])

    return (
        <div
            id={'i'}
            className={'img-picker__img-wrapper'}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
        >
            <img
                ref={imgRef}
                className={'img-picker__img'}
                src={url}
                alt={'Изображение продукта'}
            />
        </div>
    )
}
