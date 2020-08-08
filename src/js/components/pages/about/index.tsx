import * as React from 'react'
import {FC} from 'react'
import Container from '../../layout/container'
import Row from 'antd/lib/grid/row'
import Col from 'antd/lib/grid/col'
import {
    GUTTER_FOR_TWO_COL,
    LIST_OF_ADVANTAGES,
    YEAR_OF_OPENING,
} from '../../constants'
import './index.less'
import BreadCrumbs from '../../layout/bread-crumbs'
import {R} from '../../../navigation/routes'

const HEADING = 'О компании',
    listOfRoute: RequestInfo[] = [
        {
            to: R.ABOUT,
            name: HEADING,
        },
    ]

const About: FC = () => {
    return (
        <Container>
            <BreadCrumbs listOfRoutes={listOfRoute} />

            <h1 className={'heading heading_1'}>{HEADING}</h1>

            <Row gutter={GUTTER_FOR_TWO_COL}>
                <Col sm={12}>
                    <h2 className={'heading heading_2'}>Мебель из массива</h2>

                    <p>
                        Мебельная фабрика «Субботин» имеет богатый опыт и
                        производит мебель из массива с {YEAR_OF_OPENING} года.
                        Мы сами готовим древесину для своего производства. Наша
                        мебельная фабрика изготавливает мебель из сосны, берёзы
                        и бука.
                    </p>
                    <p>
                        Мы работаем для наших клиентов, мебельная фабрика
                        модернизируется и совершенствуется. Коллекция изделий
                        пополняется новой продукцией, в ассортимент мебели из
                        массива входят: кровати, столы, стулья, комоды, тумбы и
                        шкафы. Мы запустили новый современный сайт, который
                        поможет Вам выбрать и купить мебель из массива онлайн. В
                        честь открытия действуют выгодные акции.
                    </p>
                    <p>
                        В нашей компании работают опытные, квалифицированные
                        мастера, знающие свое дело.
                    </p>
                    <p>
                        Осуществляем доставку по Москве, Московской области и
                        регионам.
                    </p>
                </Col>
                <Col>
                    <h2 className={'heading heading_2'}>Почему мы?</h2>

                    <ul className={'about-adv-list'}>
                        {LIST_OF_ADVANTAGES.map((advantage, i) => (
                            <li
                                className={'about-adv-list__item text_large'}
                                key={i}
                            >
                                {advantage}
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col sm={20}>
                    <h2 className={'heading heading_2'}>
                        Информация для покупателей
                    </h2>
                    <p>
                        Обратите внимание! Различия в цветопередаче мониторов,
                        цвета продукции, представленной в интернет-магазине,
                        могут отличаться от цвета готового изделия.
                    </p>
                    <p>
                        Если Вы решили собрать мебель самостоятельно, то
                        помните, что сборка осуществляться строго согласно
                        инструкции, такой подход гарантирует сохранение
                        потребительских свойств мебели на всем сроке службы.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default About
