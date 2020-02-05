import * as React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from '../header'
import Main from '../main'


export default function App() {
    return (
        <Router>
            <h1>App</h1>
            <Header/>
            <Main/>
        </Router>
    )
}