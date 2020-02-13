import * as React from 'react'
import {ReactElement} from 'react'
import {Link} from 'react-router-dom'
import {R} from '../../../navigation/routes'
import Container from '../container'
import './index.less'

export default function MainMenu(): ReactElement {
    return (
        <div className={'main-menu'}>
            <Container>
                <ul className={'main-menu__items'}>
                    <li className={'main-menu__item'}>
                        <Link to={R.HOME} className={'main-menu__link'}>
                            Главная
                        </Link>
                    </li>
                    <li className={'main-menu__item'}>
                        <Link to={R.CATALOG} className={'main-menu__link'}>
                            Каталог
                        </Link>
                    </li>
                    <li className={'main-menu__item'}>
                        <Link to={R.ABOUT} className={'main-menu__link'}>
                            О компании
                        </Link>
                    </li>
                    <li className={'main-menu__item'}>
                        <Link to={R.DELIVERY} className={'main-menu__link'}>
                            Доставка
                        </Link>
                    </li>
                    <li className={'main-menu__item'}>
                        <Link to={'/notfound'} className={'main-menu__link'}>
                            Несуществующая страница
                        </Link>
                    </li>
                </ul>
            </Container>
        </div>
    )
}
