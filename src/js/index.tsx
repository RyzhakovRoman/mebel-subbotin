import {hot} from 'react-hot-loader/root'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/layout/app'
import store from './store/store'
import {ReactElement} from 'react'

const Root = hot(RootApp)

function RootApp(): ReactElement {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'))
