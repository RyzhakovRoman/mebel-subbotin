import {hot} from 'react-hot-loader/root'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/layout/app'
import store from './store/store'


const
    Root = hot(RootApp),
    Component = 'df'

function RootApp() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)