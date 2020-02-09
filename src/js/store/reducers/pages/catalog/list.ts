import T from '../../../actions/actionTypes'
import {LoadProductsActionType} from '../../../types/actions'
import {ProductBriefInterface} from '../../../types/models'

const initialState: ProductBriefInterface[] = []

function list(
    state = initialState,
    action: LoadProductsActionType
): ProductBriefInterface[] {
    switch (action.type) {
        case T.LOAD_PRODUCTS_SUCCESS:
            return action.products
        case T.LOAD_MORE_PRODUCTS_SUCCESS:
            return [...state, ...action.products]
        default:
            return state
    }
}

export default list
