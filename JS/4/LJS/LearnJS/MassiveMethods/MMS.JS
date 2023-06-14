function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('')
}
camelize("background-color")

[1,124234,5435,432,324] // => [0,1,2,3,4]

console.log([1,124234,5435,432,324].map((value, index, arr) => {
    return index
})) // [0,1,2,3,4]

[1, 4, 5, 8] // ['10', '40', '50', '80']

const result = [1,2,3,4,5].filter((val, i, arr) => {
    if ( val > 1 && val < 3) {
        return val
    }
})

console.log(result);