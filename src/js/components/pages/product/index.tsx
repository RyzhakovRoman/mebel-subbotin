import * as React from 'react'
import {ReactElement, useEffect} from 'react'
import {useParams} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import {RootStateType} from '../../../store/reducers'
import {getProduct} from '../../../store/actions/actionCreatorsForRequest'
import Container from '../../layout/container'
import ImgPicker from '../../kit/img-picker'
import Button from '../../kit/button'
import {Cost} from '../../kit/cost'
import {TabInterface, Tabs} from '../../kit/tabs'
import './index.less'

const fakeImages = [
        // 'https://smebel.uz/files/proekti/krovati/135.jpg',
        // 'https://smebel.uz/files/proekti/krovati/101.jpg',
        // 'https://smebel.uz/files/proekti/krovati/135.jpg',
        // 'https://smebel.uz/files/proekti/krovati/101.jpg',
        'http://localhost:8080/dist/src/img/main-banner/5499b595352f2a0022878fa026fd5413.jpg',
        'http://localhost:8080/dist/src/img/main-banner/5499b595352f2a0022878fa026fd5413.jpg',
        'http://localhost:8080/dist/src/img/main-banner/5499b595352f2a0022878fa026fd5413.jpg',
        'http://localhost:8080/dist/src/img/main-banner/5499b595352f2a0022878fa026fd5413.jpg',
    ],
    fakeTabs: TabInterface[] = [
        {
            id: 0,
            name: 'Описание',
            panel: <div>Панель описания</div>,
        },
        {
            id: 1,
            name: 'Отзывы',
            panel: <div>Панель отзывов</div>,
        },
    ]
export default function Product(): ReactElement {
    const {id} = useParams(),
        {data: product, dataRequestStatus} = useSelector(
            (state: RootStateType) => state.pages.product
        ),
        dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct(id))
    }, [id])

    if (dataRequestStatus === 'started' || dataRequestStatus === 'didNotLoad')
        return <h2>Информация о продукте загружается</h2>
    // {/*<img src={product.imgLink} alt={product.name} />*/}

    return (
        <Container>
            <Row gutter={56} className={'product'}>
                <Col sm={12}>
                    <ImgPicker images={fakeImages} />
                </Col>
                <Col sm={12}>
                    <h1 className={'product__name'}>{product.name}</h1>
                    <p>Артикул продукта: {product.id} 3274</p>
                    <Cost
                        className={'cost_large product__cost'}
                        cost={product.cost}
                        canceledCost={'12 000'}
                    />
                    <div className={'product__short-desc'}>
                        <p>Краткое описание</p>
                        <p>
                            Может быть тут будет какое то примечяние <br /> даже
                            возможно на пару строчек
                        </p>
                    </div>
                    {/* todo - Сделать первичной */}
                    <Button
                        className={'button_primary'}
                        text={'Добавить в корзину'}
                    />
                    <p className={'product__categories'}>
                        Категории: <a href={'#'}>Детские</a>,{' '}
                        <a href={'#'}>Другая категория</a>
                    </p>
                </Col>
                <Col sm={20}>
                    <Tabs
                        className={'product__tabs'}
                        tabs={fakeTabs}
                        defaultActiveId={0}
                    />
                </Col>
            </Row>
            <div style={{width: 100, height: 100}}>d</div>
        </Container>
    )
}
