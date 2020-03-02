import {ProductInterface} from '../../../types/models'
import {BasketActionType} from '../../../types/actions'
import T from '../../actions/actionTypes'

export const initialState: ProductInterface[] = []

export default function basket(
    state: ProductInterface[] = initialState,
    action: BasketActionType
): ProductInterface[] {
    switch (action.type) {
        case T.ADD_PRODUCT_TO_BASKET:
            return [...state, action.product]
        case T.DELETE_PRODUCT_FROM_BASKET:
            return state.filter(product => product.id !== action.productId)
        default:
            return state
    }
}
