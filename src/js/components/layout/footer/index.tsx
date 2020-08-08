import * as React from 'react'
import {FC} from 'react'
import Container from '../container'
import Logo from '../../kit/logo'
import Row from 'antd/lib/grid/row'
import Col from 'antd/lib/grid/col'
import {PHONE, PHONE_2, PHONE_2_HREF, PHONE_HREF} from '../../constants'
import {PhoneOutlined} from '@ant-design/icons/lib'
import './index.less'
import getListOfCategories from '../../../helpers/get-list-of-categories'
import {Link} from 'react-router-dom'
import {R} from '../../../navigation/routes'

const Footer: FC = () => {
    return (
        <footer className={'footer'}>
            <Container>
                <Row gutter={56}>
                    <Col xs={24} sm={10} md={8}>
                        <Logo
                            linkClassName={'footer__link-logo'}
                            logoClassName={'footer__logo'}
                        />
                        <div className={'footer__phone-group'}>
                            <a className={'footer__phone'} href={PHONE_HREF}>
                                <PhoneOutlined /> {PHONE}
                            </a>
                            <a className={'footer__phone'} href={PHONE_2_HREF}>
                                <PhoneOutlined /> {PHONE_2}
                            </a>
                        </div>
                        <div className={'footer__social-wrapper'}>
                            <p>Социальные сети</p>
                            <ul className={'footer__social-list'}>
                                <li className={'footer__social'}>
                                    <a href='#' target={'_blank'}>
                                        VK
                                    </a>
                                </li>
                                <li className={'footer__social'}>
                                    <a href='#' target={'_blank'}>
                                        Inst
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={24} sm={14} md={16}>
                        <Row gutter={24} justify={'end'}>
                            <Col xs={12} sm={12} lg={6}>
                                <p>Основное меню</p>
                                <ul className={'footer__menu'}>
                                    <li className={'footer__menu-item'}>
                                        <Link
                                            to={R.CATALOG}
                                            className={'footer__menu-link'}
                                        >
                                            Каталог
                                        </Link>
                                    </li>
                                    <li className={'footer__menu-item'}>
                                        <Link
                                            to={R.DELIVERY}
                                            className={'footer__menu-link'}
                                        >
                                            Доставка
                                        </Link>
                                    </li>
                                    <li className={'footer__menu-item'}>
                                        <Link
                                            to={R.ABOUT}
                                            className={'footer__menu-link'}
                                        >
                                            О компании
                                        </Link>
                                    </li>
                                    <li className={'footer__menu-item'}>
                                        <Link
                                            to={R.MATERIALS}
                                            className={'footer__menu-link'}
                                        >
                                            Материалы
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col xs={12} sm={12} lg={6}>
                                <p>Каталог</p>
                                <ul className={'footer__menu'}>
                                    {getListOfCategories('footer__menu-item')}
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
