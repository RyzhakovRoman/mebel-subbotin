import * as React from 'react'
import {Link} from 'react-router-dom'
import {R} from '../../../navigation/routes'


export default function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link to={R.HOME}>Главная</Link>
                </li>
                <li>
                    <Link to={R.CATALOG}>Каталог</Link>
                </li>
                <li>
                    <Link to={R.ABOUT}>О компании</Link>
                </li>
                <li>
                    <Link to={R.DELIVERY}>Доставка</Link>
                </li>
            </ul>
        </header>
    )
}