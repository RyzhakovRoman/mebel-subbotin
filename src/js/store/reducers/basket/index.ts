import {ProductInterface} from '../../../types/models'
import {BasketActionType} from '../../../types/actions'
import T from '../../actions/actionTypes'

export const initialState: ProductInterface[] = []

export default function basket(
    state: ProductInterface[] = initialState,
    action: BasketActionType
) {
    switch (action.type) {
        case T.ADD_PRODUCT_TO_BASKET:

        default:
            return state
    }
}
