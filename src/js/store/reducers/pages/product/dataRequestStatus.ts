import T from '../../../actions/actionTypes'
import {RequestStatusType} from '../../../types'
import {LoadProductActionType} from '../../../types/actions'

export const initialState: RequestStatusType = 'didNotLoad'

function dataRequestStatus(
    state = initialState,
    action: LoadProductActionType
): RequestStatusType {
    switch (action.type) {
        case T.LOAD_PRODUCT_STARTED:
            return 'started'
        case T.LOAD_PRODUCT_SUCCESS:
            return 'success'
        case T.LOAD_PRODUCT_ERROR:
            return 'error'
        default:
            return state
    }
}

export default dataRequestStatus
