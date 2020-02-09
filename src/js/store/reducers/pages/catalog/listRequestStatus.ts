import T from '../../../actions/actionTypes'
import {RequestStatusType} from '../../../types'
import {LoadProductsActionType} from '../../../types/actions'

const initialState: RequestStatusType = 'didNotLoad'

function listRequestStatus(
    state = initialState,
    action: LoadProductsActionType
): RequestStatusType {
    switch (action.type) {
        case T.LOAD_PRODUCTS_STARTED:
            return 'started'
        case T.LOAD_PRODUCTS_SUCCESS:
            return 'success'
        case T.LOAD_MORE_PRODUCTS_SUCCESS:
            return 'success'
        case T.LOAD_PRODUCTS_ERROR:
            return 'error'
        default:
            return state
    }
}

export default listRequestStatus
