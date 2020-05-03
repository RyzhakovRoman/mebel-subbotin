import * as React from 'react'
import {ReactElement} from 'react'
import {Link} from 'react-router-dom'
import {R} from '../../../navigation/routes'
import Container from '../container'
import './index.less'
import getListOfCategories from '../../../helpers/get-list-of-categories'

export default function MainMenu(): ReactElement {
    return (
        <div className={'main-menu'}>
            <Container>
                <ul className={'main-menu__items'}>
                    <li className={'main-menu__item'}>
                        <Link to={R.CATALOG} className={'main-menu__link'}>
                            Каталог
                        </Link>
                        <ul className={'main-submenu main-menu__main-submenu'}>
                            {getListOfCategories('', 'main-submenu__link')}
                        </ul>
                    </li>
                    <li className={'main-menu__item'}>
                        <Link to={R.DELIVERY} className={'main-menu__link'}>
                            Доставка
                        </Link>
                    </li>
                    <li className={'main-menu__item'}>
                        <Link to={R.ABOUT} className={'main-menu__link'}>
                            О компании
                        </Link>
                    </li>
                </ul>
            </Container>
        </div>
    )
}
