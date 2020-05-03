import {ReactElement} from 'react'
import * as React from 'react'
import {Route, Switch} from 'react-router-dom'
import {R} from '../../../navigation/routes'
import Home from '../../pages/home'
import Delivery from '../../pages/delivery'
import About from '../../pages/about'
import Catalog from '../../pages/catalog/main'
import NotFound from '../../pages/not-found'
import Product from '../../pages/product'

export default function Main(): ReactElement {
    return (
        <main>
            <Switch>
                <Route path={R.PRODUCT}>
                    <Product />
                </Route>
                <Route
                    path={[R.CATALOG_CATEGORY_SUBCATEGORY, R.CATALOG_CATEGORY]}
                >
                    <Catalog />
                </Route>
                <Route path={R.ABOUT}>
                    <About />
                </Route>
                <Route path={R.DELIVERY}>
                    <Delivery />
                </Route>
                <Route path={R.HOME} exact>
                    <Home />
                </Route>
                <Route path={'/*'}>
                    <NotFound />
                </Route>
            </Switch>
        </main>
    )
}
