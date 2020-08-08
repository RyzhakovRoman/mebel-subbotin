import * as React from 'react'
import {FC} from 'react'
import Container from '../../layout/container'
import {R} from '../../../navigation/routes'
import BreadCrumbs from '../../layout/bread-crumbs'

const HEADING = 'Доставка',
    listOfRoute: RequestInfo[] = [
        {
            to: R.DELIVERY,
            name: HEADING,
        },
    ]

const Delivery: FC = () => {
    return (
        <Container>
            <BreadCrumbs listOfRoutes={listOfRoute} />

            <h1 className={'heading heading_1'}>{HEADING}</h1>
        </Container>
    )
}

export default Delivery
