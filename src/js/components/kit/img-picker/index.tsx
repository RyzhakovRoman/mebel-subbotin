import * as React from 'react'
import {FC, useState} from 'react'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import './index.less'
import SelectedImg from './selected-img'

interface ImgPickerPropsInterface {
    images: string[];
}

let i = 0

const ImgPicker: FC<ImgPickerPropsInterface> = ({images}) => {
    const [showImgUrl, setShowImgId] = useState(images[0])

    return (
        <Row className={'img-picker'}>
            <Col xs={24} sm={24}>
                <SelectedImg url={showImgUrl} />
            </Col>
            <Col xs={24} sm={24}>
                <Row gutter={{xs: 8, sm: 12}}>
                    {images.map(imgUrl => {
                        const activeClass =
                            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                            showImgUrl === imgUrl &&
                            'img-picker__img-wrapper_active'

                        return (
                            <Col xs={6} sm={6} key={imgUrl + i++}>
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

export default React.memo(ImgPicker)
