import * as React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from '../header'
import Main from '../main'
import './index.less'
import {ReactElement} from 'react'

export default function App(): ReactElement {
    return (
        <Router>
            <h1>Top Application</h1>
            <Header />
            <Main />
        </Router>
    )
}

// export default hot(App)
