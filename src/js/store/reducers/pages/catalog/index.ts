import {combineReducers} from 'redux'
import list from './list'
import listRequestStatus from './listRequestStatus'

export default combineReducers({
    list,
    listRequestStatus,
    // filters
})
