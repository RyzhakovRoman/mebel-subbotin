import * as React from 'react'
import {ReactElement} from 'react'
import MainMenu from '../main-menu'

export default function Header(): ReactElement {
    return (
        <header>
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
