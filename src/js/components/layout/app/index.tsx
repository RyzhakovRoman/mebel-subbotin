import * as React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from '../header'
import Main from '../main'
import './index.less'

export default
function App() {
    return (
        <Router>
            <h1>Top Application</h1>
            <input type='text'/>
            <Header/>
            <Main/>
        </Router>
    )
}

// export default hot(App)