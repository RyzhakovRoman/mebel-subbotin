import {combineReducers} from 'redux'
import data from './data'
import dataRequestStatus from './dataRequestStatus'

export default combineReducers({
    data,
    dataRequestStatus,
})
