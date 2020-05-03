/**
 * Делит целые числа по тысячам через пробел 5000 -> 5 000
 */
const divideIntegerBySpace = (num: number): string =>
    String(num)
        .split('')
        .reverse()
        .join('')
        .match(/.{1,3}/g)
        .join(' ')
        .split('')
        .reverse()
        .join('')

export default divideIntegerBySpace
