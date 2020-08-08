/**
 * Если id продукта, количество выбранных свойств
 * или значения выбранных свойств отличаются
 * значит значит конфигурации не равны и
 * возвращаем false
 * иначе true
 *
 * @param productIdOne
 * @param spOne
 * @param productIdTwo
 * @param spTwo
 */
import ProductConfigurationInterface from '../../../types/render/product-configuration-interface'
import {COLOR_PROPERTY_TYPE} from '../../../components/constants'
import ColorInterface from '../../../types/models/color-interface'

const compareProductConfigurations = (
    {
        productId: productIdOne,
        selectedProperties: spOne,
    }: ProductConfigurationInterface,
    {
        productId: productIdTwo,
        selectedProperties: spTwo,
    }: ProductConfigurationInterface
): boolean => {
    console.log('spOne, spTwo ', spOne, spTwo)

    // Если id продуктов разные, значит конфигурации разные
    if (productIdOne !== productIdTwo) return false

    // Проверяем количество свойств,
    // оно должно быть одинаковым
    if (spOne.size !== spTwo.size) return false

    // Обходим список свойств в новой конфигурации
    // @ts-ignore
    for (const [propertyTypeId, selectedPropertyOne] of spOne.entries()) {
        const selectedPropertyTwo = spTwo.get(propertyTypeId)

        // Если цвет то сравниваем id
        // if (selectedPropertyTwo.propertyTypeType === COLOR_PROPERTY_TYPE) {
        //     const colorTwo = selectedPropertyTwo.propertyValueValue as ColorInterface,
        //         colorOne = selectedPropertyTwo.propertyValueValue as ColorInterface
        //
        //     if (JSON.stringify(colorTwo) !== JSON.stringify(colorOne)) return  false
        //     else continue
        // }

        if (
            JSON.stringify(selectedPropertyOne.propertyValueValue) !==
            JSON.stringify(selectedPropertyTwo.propertyValueValue)
        ) {
            // Если в списке свойств текущей конфигурации нет
            // какого то свойства, из новой конфигурации,
            // то считаем, что конфигурации различны
            return false
        }
    }

    // Если все сравнения пройдены,
    // то конфигурации эквивалентны
    return true
}

export default compareProductConfigurations
