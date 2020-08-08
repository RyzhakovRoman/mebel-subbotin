import * as React from 'react'
import {FC, useCallback, useState} from 'react'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import Modal from 'antd/lib/modal'
import 'antd/lib/modal/style'
import FormItem from '../../../kit/form-item'
import Input from '../../../kit/input'
import Button from '../../../kit/button'
import {DELIVERY_DAYS} from '../../../constants'
import TextArea from '../../../kit/text-area'
import {LoadingOutlined} from '@ant-design/icons/lib'

const OrderSection: FC = () => {
    const [name, setName] = useState<string>(''),
        [email, setEmail] = useState<string>(''),
        [phone, setPhone] = useState<string>(''),
        [address, setAddress] = useState<string>(''),
        [comment, setComment] = useState<string>(''),
        [error, setError] = useState<string>(''),
        [processOfSending, setProcessOfSending] = useState<boolean>(false),
        validate = useCallback(() => {
            if (name === '' || phone === '' || address === '') {
                setError('Все обязательные поля должны быть заполнены')
                return false
            } else {
                setError('')
                return true
            }
        }, [name, phone, address]),
        handleSubmit = useCallback(() => {
            console.log('Заказать!')
            const isValid: boolean = validate()

            if (isValid) {
                /**
                 * Отправляем на сервак
                 */
                setProcessOfSending(true)

                setTimeout(() => {
                    setProcessOfSending(false)

                    // todo - обработать ситуацию, когда ошибка на сервере
                    Modal.success({
                        title: 'Заказ принят!',
                        content:
                            'Ожидайте, в ближайшее время с Вами свяжется наш консультант.',
                    })
                }, 2000)
            }
        }, [name, phone, email, address, comment]),
        submitClassName = 'button_primary button_large cart__order-button',
        nameError: boolean = error !== '' && name === '',
        phoneError: boolean = error !== '' && phone === '',
        addressError: boolean = error !== '' && address === ''

    return (
        <div className={'cart__order-section'}>
            <h2 className={'heading heading_2'}>Оформление заказа</h2>

            <Row
                gutter={[
                    {sm: 16, lg: 24},
                    {xs: 24, sm: 0},
                ]}
            >
                <Col sm={16}>
                    <Row gutter={{xs: 8, sm: 12, lg: 24}}>
                        <Col xs={12} sm={12} md={8}>
                            <FormItem
                                label={'Имя'}
                                error={nameError}
                                required={true}
                            >
                                <Input
                                    error={nameError}
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={12} sm={12} md={8}>
                            <FormItem
                                label={'Телефон'}
                                error={phoneError}
                                required={true}
                            >
                                <Input
                                    error={phoneError}
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={24} md={8}>
                            <FormItem label={'Электронная почта'}>
                                <Input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={12} md={12}>
                            <FormItem
                                label={'Адрес доставки'}
                                error={addressError}
                                required={true}
                            >
                                <TextArea
                                    error={addressError}
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={12} md={12}>
                            <FormItem label={'Комментарий к заказу'}>
                                <TextArea
                                    value={comment}
                                    onChange={e => setComment(e.target.value)}
                                />
                            </FormItem>
                        </Col>

                        <Col sm={24}>
                            {error !== '' ? (
                                <p
                                    style={{marginTop: '1rem'}}
                                    className={'text_error'}
                                >
                                    {error}
                                </p>
                            ) : null}
                        </Col>
                    </Row>

                    {!processOfSending ? (
                        <Button
                            className={submitClassName}
                            text={'Заказать'}
                            onClick={handleSubmit}
                        />
                    ) : (
                        <Button
                            className={submitClassName}
                            text={
                                <div>
                                    Отправка заказа <LoadingOutlined />
                                </div>
                            }
                        />
                    )}
                </Col>
                <Col sm={{span: 8, offset: 0}} md={{span: 7, offset: 1}}>
                    <h3>Условия доставки</h3>
                    <p>Москва: 1 000 ₽</p>
                    <p>Подмосковье: + 30 ₽/км</p>
                    <p>Регионы: информация по запросу</p>
                    <p>Доставка осуществляется в течении {DELIVERY_DAYS} дн.</p>
                </Col>
            </Row>
        </div>
    )
}

export default OrderSection
