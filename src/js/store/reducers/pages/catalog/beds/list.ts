import T from '../../../../actions/actionTypes'
import {LoadProductsActionType} from '../../../../types/actions'
import {ProductInterface} from '../../../../types/models'


const initialState: ProductInterface[] = [
    // {id: 45, name: 'ccccc'},
    // {id: 46, name: 'cccccsds'},
]

function list(state = initialState, action: LoadProductsActionType): ProductInterface[] {
    switch (action.type) {
        case T.LOAD_PRODUCTS_SUCCESS:
            return action.products
        default:
            return state
    }
}

export default list