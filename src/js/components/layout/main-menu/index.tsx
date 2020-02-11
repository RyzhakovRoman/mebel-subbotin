import * as React from 'react'
import {ReactElement} from 'react'
import {Link} from 'react-router-dom'
import {R} from '../../../navigation/routes'
import CATALOG_CATEGORIES from '../../../navigation/catalogCategories'
import Container from '../container'
import './index.less'

const categories = []

for (const category in CATALOG_CATEGORIES) {
    // eslint-disable-next-line no-prototype-builtins
    if (!CATALOG_CATEGORIES.hasOwnProperty(category)) continue

    const categoryInfo = CATALOG_CATEGORIES[category]
    categories.push(
        <li key={category}>
            <Link to={`${R.CATALOG}/${category}`}>
                {categoryInfo.nameForLink}
            </Link>
        </li>
    )
}

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
                        <ol style={{position: 'absolute'}}>{categories}</ol>
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
