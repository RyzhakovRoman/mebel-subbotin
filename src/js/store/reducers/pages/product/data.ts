import T from '../../../actions/actionTypes'
import {LoadProductActionType} from '../../../../types/actions'
import {ProductInterface} from '../../../../types/models'

export const initialState: ProductInterface = null

function data(
    state = initialState,
    action: LoadProductActionType
): ProductInterface {
    switch (action.type) {
        case T.LOAD_PRODUCT_STARTED:
            return null
        case T.LOAD_PRODUCT_SUCCESS:
            return action.product
        default:
            return state
    }
}

export default data
