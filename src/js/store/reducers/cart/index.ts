import CartActionType from '../../../types/actions/cart'
import T from '../../actions/actionTypes'
import ProductConfigurationInterface from '../../../types/render/product-configuration-interface'
import compareProductConfigurations from './compare-product-configurations'

export const initialState: ProductConfigurationInterface[] = []

export default function cart(
    state: ProductConfigurationInterface[] = initialState,
    action: CartActionType
): ProductConfigurationInterface[] {
    switch (action.type) {
        case T.ADD_PRODUCT_TO_CART: {
            // console.log(
            //     'Редьюсер корзины добавление продукта ',
            //     action.productConfiguration
            // )
            let indexEqualProductConfiguration = 0

            // Обходим уже добавленные конфигурации продуктов
            const equalProductConfiguration = state.find(
                (productConfigurationCurrent, i) => {
                    const productConfigurationNew = action.productConfiguration

                    // Если эта конфигурация продукта уже есть в корзине
                    // console.log('Нашли похожий продукт')

                    // Сравниваем 2 конфигурации
                    const productConfigurationsAreEqual = compareProductConfigurations(
                        productConfigurationCurrent,
                        productConfigurationNew
                    )

                    // Если равны, то за запоминаем индекс
                    // конфигурации в массиве конфигураций
                    if (productConfigurationsAreEqual)
                        indexEqualProductConfiguration = i

                    return productConfigurationsAreEqual
                }
            )

            // Если эквивалентная комплектация найдена,
            if (equalProductConfiguration !== undefined) {
                // то сначала удаляем продукт из массива
                const filteredState = [...state]

                // увеличиваем количество на 1
                equalProductConfiguration.amount += 1

                // вставляем новую конфигурацию,
                // с обновленными количеством
                filteredState.splice(
                    indexEqualProductConfiguration,
                    1,
                    equalProductConfiguration
                )
                return filteredState
            } else {
                return [...state, {...action.productConfiguration, amount: 1}]
            }
        }
        case T.DELETE_PRODUCT_FROM_CART:
            return state.filter(
                (product, i) => i !== action.productConfigurationId
            )
        case T.REDUCE_AMOUNT_PRODUCT_IN_CART: {
            const productConfiguration = state[action.productConfigurationId],
                newState = [...state],
                amount =
                    productConfiguration.amount > 1
                        ? productConfiguration.amount - 1
                        : 1

            newState[action.productConfigurationId] = {
                ...productConfiguration,
                amount,
            }

            return newState
        }
        default:
            return state
    }
}
