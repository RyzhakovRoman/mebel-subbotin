import * as React from 'react'
import {FC} from 'react'
import {PlusOutlined} from '@ant-design/icons/lib'
import notification from 'antd/lib/notification'
import 'antd/lib/notification/style'
import Button from '../../../kit/button'
import {useHistory} from 'react-router'
import {R} from '../../../../navigation/routes'
import './index.less'

interface AddButtonPropsInterface {
    onAddClick: () => void;
}

const AddButton: FC<AddButtonPropsInterface> = ({onAddClick}) => {
    const history = useHistory(),
        openNotification = (): void => {
            const key = `open${Date.now()}`,
                btn = (
                    <Button
                        text={'Перейти в корзину'}
                        onClick={() => {
                            history.push(R.CART)
                            notification.close(key)
                        }}
                    />
                )
            notification.open({
                message: 'Товар добавлен в корзину',
                btn,
                key,
                className: 'add-button__notification',
                // onClose: close,
            })
        }

    return (
        <Button
            className={'button_primary button_large'}
            text={
                <>
                    <PlusOutlined
                        style={{
                            fontSize: '1.3rem',
                            marginRight: '.3rem',
                        }}
                    />{' '}
                    Добавить в корзину
                </>
            }
            onClick={() => {
                onAddClick()
                openNotification()
            }}
        />
    )
}

export default AddButton
