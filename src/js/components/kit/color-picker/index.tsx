import * as React from 'react'
import Modal from 'antd/lib/modal'
import 'antd/lib/modal/style'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import {FC, useState} from 'react'
import './index.less'
import {AimOutlined, CheckOutlined} from '@ant-design/icons/lib'
import colors from '../../../models/colors'
import Button from '../button'
import ColorInterface from '../../../types/models/color-interface'

interface ColorPickerPropsInterface {
    onChange: (color: ColorInterface) => void;
}

const ColorPicker: FC<ColorPickerPropsInterface> = ({onChange}) => {
    const [picked, setPicked] = useState<number>(-1),
        [modalVisible, setModalVisible] = useState<boolean>(false),
        pickedColor = colors[picked]

    return (
        <div>
            <Row gutter={18}>
                {pickedColor === undefined ? null : (
                    <Col>
                        <div
                            className={'color-picker__selected-value'}
                            style={{
                                backgroundColor: pickedColor.color,
                            }}
                        />
                    </Col>
                )}
                <Col>
                    {pickedColor === undefined ? null : (
                        <div className={'color-picker__selected-color-name'}>
                            {pickedColor.name} ({pickedColor.ral})
                        </div>
                    )}
                    <Button
                        text={
                            <div>
                                <AimOutlined />{' '}
                                {pickedColor !== undefined
                                    ? 'Изменить цвет'
                                    : 'Выбрать цвет'}
                            </div>
                        }
                        onClick={() => setModalVisible(true)}
                    />
                </Col>
            </Row>
            <Modal
                // width={924}
                className={'color-picker__modal'}
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                <div className={'color-picker'}>
                    {colors.map((color, i) => {
                        const isPicked = i === picked,
                            style = {
                                backgroundColor: color.color,
                            }

                        return (
                            <div
                                className={`color-picker__item ${
                                    isPicked ? 'color-picker__item_picked' : ''
                                }`}
                                key={i}
                            >
                                <div
                                    className={'color-picker__value'}
                                    style={style}
                                    onClick={() => {
                                        setPicked(prevState => {
                                            onChange(
                                                prevState === i
                                                    ? undefined
                                                    : color
                                            )
                                            return prevState === i ? -1 : i
                                        })
                                        setModalVisible(false)
                                    }}
                                >
                                    {isPicked ? (
                                        <span
                                            className={
                                                'color-picker__icon-circle'
                                            }
                                        >
                                            <CheckOutlined
                                                className={'color-picker__icon'}
                                            />
                                        </span>
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <div className={'color-picker__label'}>
                                    {color.name}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Modal>
        </div>
    )
}

export default ColorPicker
