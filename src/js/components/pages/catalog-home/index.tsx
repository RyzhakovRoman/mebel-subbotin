import * as React from 'react'
import {FC} from 'react'
import Container from '../../layout/container'
import './index.less'
import CategoryCards from './category-cards'
import {R} from '../../../navigation/routes'
import BreadCrumbs, {RouteInfo} from '../../layout/bread-crumbs'

const HEADING = 'Каталог мебели из массива',
    listOfRoute: RouteInfo[] = [
        {
            to: R.CATALOG,
            name: 'Каталог мебели',
        },
    ]

const CatalogHome: FC = () => {
    return (
        <Container>
            <BreadCrumbs listOfRoutes={listOfRoute} />

            <h1 className={'heading heading_1'}>{HEADING}</h1>

            <p>
                Дорогой покупатель! Мебельное производство «Субботин» предлагает
                Вашему вниманию качественную <strong>мебель из массива</strong>{' '}
                изготовленную руками опытных мастеров.
            </p>

            <CategoryCards />
        </Container>
    )
}

export default CatalogHome
