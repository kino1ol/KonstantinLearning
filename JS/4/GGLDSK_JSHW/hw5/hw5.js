let border = "-------------------------------------------"

function minusNum(firstNum, secondNum, thirdNum) {
    let result = (firstNum - secondNum) / thirdNum
    console.log(result)
}
minusNum(10, 2, 2)

console.log(border)
// 1 


function CubeSquare(number) {
    let square 
    let Cube
    square = number ** 2
    Cube = number ** 3
    console.log(square, Cube)
}
CubeSquare(10)

console.log(border)
// 2

function min(a, b) {
    if (a < b) {
        console.log(a)
    }
    else {
        console.log(b)
    }
}
function max(a, b) {
    if (a > b) {
        console.log(a)
    }
    else {
        console.log(b)
    }
}
min(1, 2)
max(2, 4)

console.log(border)
// 3
let array = []
let prompt1 = +prompt('укажите первое число диапозона: ', )
let prompt2 = +prompt('укажите второе число диапозона: ', )
function createArray(firstPrompt, secondPrompt) {
    firstPrompt = prompt1
    secondPrompt = prompt2
    for (let i = firstPrompt; i <= secondPrompt; i++) {
        array.push(i)
    }
    console.log(array)
}
createArray(prompt1, prompt2)

console.log(border)
// 4

function isEven(number) {
    if (number % 2 == 0) {
        return result = true
    }
    else {
        return result = false
    }
}
isEven(2)
console.log(result)

console.log(border)
// 5

let array1 = []
function ebenArray(aray){
    for (i = 0; i < aray.lenght; i++) {
        if (isEven(aray[i]) = true) {
            array1.push[i]
        } 
    }
    console.log(array1)
}
ebenArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log(border)
// 6

function pyramide(height) {
    for (i = 1; i <= height; i++) {
        let symbol = ''
        for(let j = 0; j < i; j++){
            
            symbol+= height == undefined || height.length-1 || height == ' ' ? i : height
        }
        console.log(symbol+"")
    }
}
pyramide(5)

console.log(border)
// 7