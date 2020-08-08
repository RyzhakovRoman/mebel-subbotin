// Парсер цветов с https://colorscheme.ru/ral-colors/ral-classic.html
const tableNode = document.getElementsByClassName('color-table color-zoom')[0],
    trNodes = tableNode.getElementsByTagName('tr')

let indexForColorCategories = 1,
    insertForColorCategories = 'INSERT INTO `color-categories` (`id`, `name`) VALUES ',
    insertForColors = 'INSERT INTO `colors` (`id`, `colorCategoryId`, `name`, `ral`, `color`) VALUES '

Array.prototype.forEach.call(trNodes, (trNode) => {
    const tdNodes = trNode.children
    // Если строка заголовок!
    if (tdNodes[1].innerHTML === 'Цвет RAL') {
        console.log('Категория цветов ', tdNodes[0])
        insertForColorCategories += `(NULL, '${tdNodes[0].innerHTML}'),`
        indexForColorCategories++
    } else {
        insertForColors += `(NULL, '${indexForColorCategories}', '${tdNodes[1].children[tdNodes[1].children.length - 1].innerHTML}', '${tdNodes[1].children[0].innerHTML}', '${tdNodes[4].innerHTML}'),\n`
    }
})

console.log(insertForColorCategories)
console.log(insertForColors)
