import {combineReducers} from 'redux'
import pages from './pages'
import basket from './basket'

const reducers = combineReducers({
    pages,
    basket,
})

export type RootStateType = ReturnType<typeof reducers>

export default reducers
