import * as React from 'react'
import {Link} from 'react-router-dom'
import {R} from '../../../navigation/routes'
import {ReactElement} from 'react'
import CATALOG_CATEGORIES from '../../../navigation/catalogCategories'

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
        <header>
            <ul>
                <li>
                    <Link to={R.HOME}>Главная</Link>
                </li>
                <li>
                    <Link to={R.CATALOG}>Каталог</Link>
                    <ol>{categories}</ol>
                </li>
                <li>
                    <Link to={R.ABOUT}>О компании</Link>
                </li>
                <li>
                    <Link to={R.DELIVERY}>Доставка</Link>
                </li>
                <li>
                    <Link to={'/notfound'}>Несуществующая страница</Link>
                </li>
            </ul>
        </header>
    )
}
