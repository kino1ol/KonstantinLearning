// Напечатать те из двузначных чисел которые делятся на 4, но не делятся на 6.
for (let i = 10; i < 100; i++) {
    if (i % 4 == 0) {
        if (i % 6 != 0){
            console.log(i)
        }
    }
}

// Два двузначных числа, записанных одно за другим , образуют четырёхзначное число, которое делится на их произведение. Найти эти числа.
let sum 
let str = ""
let container
for (i = 10; i < 100; i++) {
    for (let j = 10; j < 100; j++) {
        container = str + j + i
        sum = i * j
        if (container % sum == 0) {
            console.log(container)
        }
    }
}
// Даны натуральные числа от 20 до 50.Напечатать те из них, которые делятся на 3, но не делятся на 5. 
for (let i = 20; i < 51; i++) {
    if (i % 3 == 0) {
        if (i % 5 != 0){
            console.log(i)
        }
    }
}