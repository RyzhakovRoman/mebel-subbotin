import * as React from 'react'
import {ReactElement} from 'react'
import MainMenu from '../main-menu'
import Container from '../container'

export default function Header(): ReactElement {
    return (
        <header>
            <Container>
                <h1 style={{margin: '1rem 0 1rem'}}>Subbotin</h1>
            </Container>
            <MainMenu />
        </header>
    )
}

// {/*<ul>*/}
// {/*    <li>*/}
// {/*        <Link to={`${R.CATALOG}/beds/detskie`}>*/}
// {/*            Детские*/}
// {/*        </Link>*/}
// {/*    </li>*/}
// {/*    <li>*/}
// {/*        <Link to={`${R.CATALOG}/beds/odnospalnie`}>*/}
// {/*            Односпальные*/}
// {/*        </Link>*/}
// {/*    </li>*/}
// {/*</ul>*/}
