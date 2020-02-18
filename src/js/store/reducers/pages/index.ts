import {combineReducers} from 'redux'
import catalog from './catalog'
import product from './product'

export default combineReducers({
    catalog,
    product,
})
