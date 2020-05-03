import {combineReducers} from 'redux'
import pages from './pages'
import cart from './cart'

const reducers = combineReducers({
    pages,
    cart,
})

export type RootStateType = ReturnType<typeof reducers>

export default reducers
