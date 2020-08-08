import * as React from 'react'
import {ReactElement} from 'react'
import {Link} from 'react-router-dom'
import {R} from '../../../navigation/routes'
import Container from '../../layout/container'

export default function NotFound(): ReactElement {
    return (
        <Container>
            <h2>404. Страница не найдена</h2>
            <Link to={R.HOME}>Вернуться на главную</Link>
        </Container>
    )
}
