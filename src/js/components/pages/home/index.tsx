import * as React from 'react'
import {ReactElement} from 'react'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import MainBanner from './main-banner'
import Container from '../../layout/container'
import {GUTTER_FOR_TWO_COL, LIST_OF_ADVANTAGES} from '../../constants'

const leftAdvantages = [],
    rightAdvantages = []

LIST_OF_ADVANTAGES.forEach((advantage, i) => {
    const node = (
        <li className={'about-adv-list__item text_large'} key={i}>
            {advantage}
        </li>
    )

    if (i < 4) leftAdvantages.push(node)
    else rightAdvantages.push(node)
})

export default function Home(): ReactElement {
    return (
        <>
            <MainBanner />

            <Container>
                <h2
                    className={'heading heading_2'}
                    style={{textAlign: 'center'}}
                >
                    Наши преимущества
                </h2>
                <Row
                    gutter={GUTTER_FOR_TWO_COL}
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        marginTop: '2rem',
                    }}
                >
                    <Col sm={12}>
                        <ul className={'about-adv-list'}>{leftAdvantages}</ul>
                    </Col>
                    <Col sm={12}>
                        <ul className={'about-adv-list'}>{rightAdvantages}</ul>
                    </Col>
                </Row>

                <h2
                    className={'heading heading_2'}
                    style={{textAlign: 'center'}}
                >
                    Какой то заголовок про Мебель
                </h2>
                <Row gutter={GUTTER_FOR_TWO_COL}>
                    <Col sm={12}>
                        <p>
                            Lorem Ipsum - это текст-"рыба", часто используемый в
                            печати и вэб-дизайне. Lorem Ipsum является
                            стандартной "рыбой" для текстов на латинице с начала
                            XVI века. В то время некий безымянный печатник
                            создал большую коллекцию размеров и форм шрифтов,
                            используя Lorem Ipsum для распечатки образцов. Lorem
                            Ipsum не только успешно пережил без заметных
                            изменений пять веков, но и перешагнул в электронный
                            дизайн. Его популяризации в новое время послужили
                            публикация листов Letraset с образцами Lorem Ipsum в
                            60-х годах и, в более недавнее время, программы
                            электронной вёрстки типа Aldus PageMaker, в шаблонах
                            которых используется Lorem Ipsum.
                        </p>
                    </Col>
                    <Col sm={12}>
                        <p>
                            Давно выяснено, что при оценке дизайна и композиции
                            читаемый текст мешает сосредоточиться. Lorem Ipsum
                            используют потому, что тот обеспечивает более или
                            менее стандартное заполнение шаблона, а также
                            реальное распределение букв и пробелов в абзацах,
                            которое не получается при простой дубликации "Здесь
                            ваш текст.. Здесь ваш текст.. Здесь ваш текст.."
                            Многие программы электронной вёрстки и редакторы
                            HTML используют Lorem Ipsum в качестве текста по
                            умолчанию, так что поиск по ключевым словам "lorem
                            ipsum" сразу показывает, как много веб-страниц всё
                            ещё дожидаются своего настоящего рождения.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
