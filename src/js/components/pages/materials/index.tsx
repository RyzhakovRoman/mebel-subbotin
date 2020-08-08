import * as React from 'react'
import {FC} from 'react'
import Container from '../../layout/container'
import {R} from '../../../navigation/routes'
import BreadCrumbs, {RouteInfo} from '../../layout/bread-crumbs'

const HEADING = 'Цвета и материалы',
    listOfRoute: RouteInfo[] = [
        {
            to: R.MATERIALS,
            name: HEADING,
        },
    ]

const Materials: FC = () => {
    return (
        <Container>
            <BreadCrumbs listOfRoutes={listOfRoute} />

            <h1 className={'heading heading_1'}>Цвета и материалы</h1>
        </Container>
    )
}

export default Materials
