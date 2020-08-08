import * as React from 'react'
import {FC} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from '../header'
import Main from '../main'
import './index.less'
import Footer from '../footer'
import ButtonToTop from '../button-to-top'

const App: FC = () => {
    return (
        <Router>
            <Header />
            <Main />
            <ButtonToTop />
            <Footer />
        </Router>
    )
}

export default App
