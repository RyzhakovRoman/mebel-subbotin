import * as React from 'react'
import Container from '../../../layout/container'
import {ReactElement} from 'react'
import Row from 'antd/lib/row'
import 'antd/lib/row/style'
import Col from 'antd/lib/col'
import 'antd/lib/col/style'
import './index.less'
import getListOfCategories from '../../../../helpers/getListOfCategories'

const categories = getListOfCategories(
    'main-banner__category',
    'main-banner__category-link'
)

export default function MainBanner(): ReactElement {
    return (
        <div className={'main-banner'}>
            <Container>
                <Row type={'flex'}>
                    <Col>
                        <ul className={'main-banner__categories'}>
                            {categories}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
