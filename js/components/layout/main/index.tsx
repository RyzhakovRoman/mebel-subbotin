import * as React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../../pages/home'
import Delivery from '../../pages/delivery'
import About from '../../pages/about'
import Catalog from '../../pages/catalog/main'
import {R} from '../../../navigation/routes'


export default function Main() {
    return (
        <main>
            <Switch>
                <Route path={R.CATALOG}>
                    <Catalog/>
                </Route>
                <Route path={R.ABOUT}>
                    <About/>
                </Route>
                <Route path={R.DELIVERY}>
                    <Delivery/>
                </Route>
                <Route path={R.HOME}>
                    <Home/>
                </Route>
            </Switch>
        </main>
    )
}
