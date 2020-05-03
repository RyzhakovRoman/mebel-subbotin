import * as React from 'react'
import {FC} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from '../header'
import Main from '../main'
import './index.less'

const App: FC = () => {
    return (
        <Router>
            <Header />
            <Main />
        </Router>
    )
}

export default App
