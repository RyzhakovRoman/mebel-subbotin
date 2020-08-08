import * as React from 'react'
import Container from '../../../layout/container'
import {ReactElement} from 'react'
import Carousel from 'antd/lib/carousel'
import 'antd/lib/carousel/style'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import './index.less'
// import getListOfCategories from '../../../../helpers/get-list-of-categories'
import Icon from '../../../kit/icon'
import {Link} from 'react-router-dom'
import {R} from '../../../../navigation/routes'
import {YEAR_OF_OPENING} from '../../../constants'

// const categories = getListOfCategories(
//     'main-banner__category',
//     'main-banner__category-link'
// )

export default function MainBanner(): ReactElement {
    return (
        <div className={'main-banner'}>
            <Container>
                <Row gutter={{md: 32, lg: 44, xl: 56}}>
                    <Col sm={24}>
                        <h1
                            className={'heading heading_1 main-banner__heading'}
                        >
                            Мебель из Мурома на заказ
                        </h1>
                    </Col>
                    <Col sm={24} lg={12}>
                        <Carousel autoplay={true} autoplaySpeed={4000}>
                            <div className={'slide-panel slide-panel_3'}>
                                <p className={'slide-panel__heading'}>
                                    Набор "Детский" <br /> скидка 20%
                                </p>
                            </div>
                            <div className={'slide-panel slide-panel_1'}>
                                <p className={'slide-panel__heading'}>
                                    Кровати из массива
                                </p>
                            </div>
                            <div className={'slide-panel slide-panel_2'}>
                                <p className={'slide-panel__heading'}>
                                    Кровать "Афина" <br /> по выгодной цене!
                                </p>
                            </div>
                        </Carousel>
                    </Col>
                    <Col sm={24} lg={12}>
                        <div className={'main-banner__categories-cont'}>
                            <p>
                                Наша фабрика делает качественную мебель из
                                массива, мы занимаемся мебельным производством{' '}
                                <strong>с {YEAR_OF_OPENING} года</strong>.
                            </p>
                            <p>
                                Доставляем мебель{' '}
                                <strong>по Москве и регионам</strong>.
                            </p>
                            <p>
                                Предлагаем <strong>выгодные цены</strong>!
                            </p>

                            <Row
                                gutter={[
                                    {xs: 8, sm: 16},
                                    {xs: 8, sm: 16},
                                ]}
                            >
                                <Col xs={12} sm={8}>
                                    <div className={'main-banner__category'}>
                                        <Icon
                                            name={'krovati main-banner__icon'}
                                        />
                                        <Link to={`${R.CATALOG}/krovati`}>
                                            Кровати
                                        </Link>
                                    </div>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <div className={'main-banner__category'}>
                                        <Icon
                                            name={'stoly main-banner__icon'}
                                        />
                                        <Link to={`${R.CATALOG}/stoly`}>
                                            Столы
                                        </Link>
                                    </div>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <div className={'main-banner__category'}>
                                        <Icon
                                            name={'shkafy main-banner__icon'}
                                        />
                                        <Link to={`${R.CATALOG}/shkafy`}>
                                            Шкафы
                                        </Link>
                                    </div>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <div className={'main-banner__category'}>
                                        <Icon
                                            name={'komody main-banner__icon'}
                                        />
                                        <Link to={`${R.CATALOG}/komody`}>
                                            Комоды
                                        </Link>
                                    </div>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <div className={'main-banner__category'}>
                                        <Icon
                                            name={'stulya main-banner__icon'}
                                        />
                                        <Link to={`${R.CATALOG}/stulya`}>
                                            Стулья
                                        </Link>
                                    </div>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <div className={'main-banner__category'}>
                                        <Icon
                                            name={'tumby main-banner__icon'}
                                        />
                                        <Link to={`${R.CATALOG}/tumby`}>
                                            Тумбы
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
