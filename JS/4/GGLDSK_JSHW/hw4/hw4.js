let border = "//////////////////////////////////////////////"

console.log(((a, b) => a + b)(1,2))
console.log((function (a, b) {
    a + b
    return
 })(1,2)) 

let mass = [1, 2, 3, 4, 5]
for (let i = 0; i < 5; i++) {
    console.log(mass[i])
}
console.log(border)
// #1

let mass1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]
console.log(mass1.length)
console.log(border)
for (i = 0; i < 17; i++) {
    if (mass1[i] < -10) {
        continue
    }
    if (mass1[i] < -3) {
        console.log(mass1[i])
    }
}
console.log(border)
// #2

let mass2 = []
for (i = 23; i <= 57; i++) {
    mass2.push(i)
}
console.log(mass2)

let mass3 = []
i = 23
do {
    mass3.push(i)
    i++
} while (i <= 57)
console.log(mass3)
console.log(border)
// #3

const arr100  = ['10', '20', '30', '50', '235', '3000']
for (i = 0; i < arr100.length; i++) {
    if ((arr100[i][0]) == 1 ) {
        console.log(arr100[i])
    }
}

console.log(border)
// обьяснишь потом каким хером надо делать №4

let week = ["пн","вт","ср","чт","пт","СБ","ВС"]
for (i = 0; i <= 4; i++) {
    console.log(week[i])
}
console.log(week[5])
console.log(week[6]) // console.log(bold(week[6])) - не выводит
console.log(border)
// #5

let mass4 = [1,4,7,2,4]
mass4.push(10)
console.log(mass4)
console.log(mass4[mass4.length - 1])

console.log(border)
// #6

/*
let arr = []
let num
while (true) {
    num = +prompt("введите числовое значение", )
    if (num === "" || num === null || num === !isFinite(num)) break;
    arr.push(num)
  }
console.log(num)
console.log(border)
// #7
*/


let mass5 = [12, false, "Текст", 4, 2, -5, 0]
mass5.reverse()
console.log(mass5)
i = 0
do {
    console.log(mass5[i])
    i++
} while (i < 7)
console.log(border)
// #8

let counter = []
let mass6 = [5, 9, 21, , , 9, 78, , , , 6]
for (i = 0; i < 11; i++) {
    if (mass6[i] != null)
        counter.push(mass6[i])
}
let holder = (mass6.length - counter.length) 
console.log(`пустых мест в массиве: ${holder}`)
console.log(mass6)
console.log(border)
// #9

let result = 0
let mass7 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2]
console.log(mass7.length)
for (i = 0; i < 15; i++) {
    if (mass7[i] = 0) {
        continue
    }
    do {
        result + mass7[i]
    } while (mass7[i] != 0)
}
console.log(result)
// #10