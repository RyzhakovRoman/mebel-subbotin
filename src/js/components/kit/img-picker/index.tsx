import * as React from 'react'
import {ReactElement, useState} from 'react'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import './index.less'
import SelectedImg from './selected-img'

interface ImgPickerPropsInterface {
    images: string[];
}

/*
 todo - Главное изображение выделить в отдельный компонент, чтоб остальные
  не перерендеривались при увеличении
*/

let i = 0

export default function ImgPicker({
    images,
}: ImgPickerPropsInterface): ReactElement {
    const [showImgUrl, setShowImgId] = useState(images[0])

    return (
        <Row gutter={[0, 12]} className={'img-picker'}>
            <Col sm={24}>
                <SelectedImg url={showImgUrl} />
            </Col>
            <Col sm={24}>
                <Row gutter={12}>
                    {images.map(imgUrl => {
                        const activeClass =
                            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                            showImgUrl === imgUrl &&
                            'img-picker__img-wrapper_active'

                        return (
                            <Col sm={6} key={imgUrl + i++}>
                                <div
                                    className={
                                        'img-picker__img-wrapper ' +
                                        'img-picker__img-wrapper_small ' +
                                        activeClass
                                    }
                                    onClick={() => setShowImgId(imgUrl)}
                                >
                                    <img
                                        className={'img-picker__img'}
                                        src={imgUrl}
                                        alt={'Изображение продукта'}
                                    />
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Row>
    )
}
