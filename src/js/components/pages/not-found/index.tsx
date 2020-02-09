import * as React from 'react'
import {ReactElement} from 'react'
import {Link} from 'react-router-dom'
import {R} from '../../../navigation/routes'

export default function NotFound(): ReactElement {
    return (
        <>
            <h2>Страница не найдена</h2>
            <Link to={R.HOME}>Вернуться на главную</Link>
        </>
    )
}
