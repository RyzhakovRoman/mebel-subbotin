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
import './index.less'

const fakeImages = [
    'https://smebel.uz/files/proekti/krovati/135.jpg',
    'https://smebel.uz/files/proekti/krovati/101.jpg',
    'https://smebel.uz/files/proekti/krovati/135.jpg',
    'https://smebel.uz/files/proekti/krovati/101.jpg',
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
                    <h1>{product.name}</h1>
                    <p>ID продукта: {product.id}</p>
                    <p>{product.cost}</p>
                </Col>
            </Row>
            <div style={{width: 100, height: 100}}>d</div>
        </Container>
    )
}
