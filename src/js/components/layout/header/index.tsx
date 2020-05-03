import * as React from 'react'
import {FC, ReactElement} from 'react'
import {Link} from 'react-router-dom'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import MainMenu from '../main-menu'
import Container from '../container'
import BasketWidget from '../cart-widget'
import './index.less'
import {PHONE, PHONE_HREF} from '../../constants'
import {R} from '../../../navigation/routes'

const Header: FC = () => {
    return (
        <header className={'header'}>
            <Container>
                <Row justify={'space-between'} align={'middle'}>
                    <Col>
                        <Link
                            style={{
                                display: 'block',
                                color: 'inherit',
                                fontSize: '2rem',
                                margin: '1rem 0 1rem',
                            }}
                            to={R.HOME}
                        >
                            Subbotin
                        </Link>
                    </Col>
                    <Col>
                        <a className={'header__phone'} href={PHONE_HREF}>
                            {PHONE}
                        </a>
                    </Col>
                    <Col>
                        <BasketWidget />
                    </Col>
                </Row>
            </Container>
            <MainMenu />
        </header>
    )
}

export default Header
