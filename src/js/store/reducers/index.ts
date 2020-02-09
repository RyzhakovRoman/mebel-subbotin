import {combineReducers} from 'redux'
import pages from './pages'

const reducers = combineReducers({
    pages,
})

export type RootStateType = ReturnType<typeof reducers>

export default reducers
