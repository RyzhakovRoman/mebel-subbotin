import * as React from 'react'
import {FC} from 'react'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import MainMenu from '../main-menu'
import Container from '../container'
import CartWidget from '../cart-widget'
import './index.less'
import {PHONE, PHONE_2, PHONE_2_HREF, PHONE_HREF} from '../../constants'
import {PhoneOutlined} from '@ant-design/icons/lib'
import Logo from '../../kit/logo'

const Header: FC = () => {
    return (
        <header className={'header'}>
            <Container>
                <Row justify={'space-between'} align={'middle'}>
                    <Col className={'header__logo-col'}>
                        <Logo
                            linkClassName={'header__link-logo'}
                            logoClassName={'header__logo'}
                        />
                    </Col>
                    <Col className={'header__phones-col'}>
                        <a className={'header__phone'} href={PHONE_HREF}>
                            <PhoneOutlined /> {PHONE}
                        </a>
                        <a className={'header__phone'} href={PHONE_2_HREF}>
                            <PhoneOutlined /> {PHONE_2}
                        </a>
                    </Col>
                    <Col className={'header__cart-col'}>
                        <CartWidget />
                    </Col>
                </Row>
            </Container>
            <MainMenu />
        </header>
    )
}

export default Header
