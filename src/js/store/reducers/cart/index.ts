import CartActionType from '../../../types/actions/cart'
import T from '../../actions/actionTypes'
import ProductConfigurationInterface from '../../../types/render/product-configuration-interface'

export const initialState: ProductConfigurationInterface[] = []

export default function cart(
    state: ProductConfigurationInterface[] = initialState,
    action: CartActionType
): ProductConfigurationInterface[] {
    switch (action.type) {
        case T.ADD_PRODUCT_TO_CART: {
            console.log(
                'cart. Добавление продукта ',
                action.productConfiguration
            )
            let indexEqualProductConfiguration = 0

            // Обходим уже добавленные конфигурации продуктов
            const equalProductConfiguration = state.find((product, i) => {
                // Если это не тот продукт, ищем дальше
                if (product.id !== action.productConfiguration.id) return false

                // Если эта конфигурация продукта уже есть в корзине
                console.log('Нашли похожий продукт')

                // то сравниваем значения свойств,
                // если все id свойств равны, то
                // мы нашли эквивалентную комплектацию
                const {assocListOfSelectedProperty} = product,
                    assocListOfSelectedPropertyNew =
                        action.productConfiguration.assocListOfSelectedProperty

                // Изначально считаем что все свойства конфигураций равны
                let propertiesAreEqual: boolean = true

                // Обходим список свойств в новой конфигурации
                for (const propertyTypeId in assocListOfSelectedPropertyNew) {
                    const selectedPropertyNew =
                            assocListOfSelectedPropertyNew[propertyTypeId],
                        selectedPropertyCurrent =
                            assocListOfSelectedProperty[propertyTypeId]
                    // Если в списке свойств текущей конфигурации нет
                    // какого то свойства, из новой конфигурации,
                    // то считаем, что конфигурации различны
                    if (
                        selectedPropertyCurrent.propertyValueId !==
                        selectedPropertyNew.propertyValueId
                    ) {
                        propertiesAreEqual = false
                        break
                    }
                }

                console.log(
                    'Свойства товара из корзины ',
                    assocListOfSelectedProperty,
                    'Свойства нового товара ',
                    assocListOfSelectedPropertyNew
                )

                indexEqualProductConfiguration = i
                return propertiesAreEqual === true
            })
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
                console.log(
                    'equalProductConfiguration',
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
        default:
            return state
    }
}
