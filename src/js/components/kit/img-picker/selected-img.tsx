import * as React from 'react'
import {ReactElement} from 'react'
import './index.less'

interface SelectedImgPropsInterface {
    url: string;
}

export default function SelectedImg({
    url,
}: SelectedImgPropsInterface): ReactElement {
    return (
        <div
            className={'img-picker__img-wrapper'}
            onMouseMove={e => {
                console.log(e)
            }}
        >
            <img
                style={{}}
                className={'img-picker__img'}
                src={url}
                alt={'Изображение продукта'}
            />
        </div>
    )
}
