import * as React from 'react'
import {ReactElement} from 'react'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import MainMenu from '../main-menu'
import Container from '../container'
import './index.less'
import {PHONE, PHONE_HREF} from '../../constants'

export default function Header(): ReactElement {
    return (
        <header className={'header'}>
            <Container>
                <Row type={'flex'} justify={'space-between'} align={'middle'}>
                    <Col>
                        <h1 style={{margin: '1rem 0 1rem'}}>Subbotin</h1>
                    </Col>
                    <Col>
                        <a className={'header__phone'} href={PHONE_HREF}>
                            {PHONE}
                        </a>
                    </Col>
                    <Col>Корзина</Col>
                </Row>
            </Container>
            <MainMenu />
        </header>
    )
}

// {/*<ul>*/}
// {/*    <li>*/}
// {/*        <Link to={`${R.CATALOG}/beds/detskie`}>*/}
// {/*            Детские*/}
// {/*        </Link>*/}
// {/*    </li>*/}
// {/*    <li>*/}
// {/*        <Link to={`${R.CATALOG}/beds/odnospalnie`}>*/}
// {/*            Односпальные*/}
// {/*        </Link>*/}
// {/*    </li>*/}
// {/*</ul>*/}
