// 1
for (let i = 1; i <= 50; i++) {
    console.log(i)
}
console.log(NaN)
for (i = 35; i >= 5; i--) {
    console.log(i)
}
console.log(NaN)
// 2
i = 89
do {
console.log(i)
i--
}while(i >= 11)
console.log(NaN)
// 3
let sum 
for (i = 0; i <= 100; i++) {
    for(let j = 0; j <= 100; j++) {
        sum = i + j
    }
    console.log(sum)
}
console.log(NaN)
// 4
for(i = 1; i <= 5; i++) {
    // да хуй его пойми как это делать
}
// 5
for (i = 8; i <= 56; i++) {
    if (i % 2 == 0) console.log(i)
}
console.log(NaN)
// 6
for (i = 2 ;i <= 10; i++) {
    for(j = 2; j <= 10; j++) {
        sum = i * j
        console.log(`${i} * ${j} = ${sum}`)
    }
}
console.log(NaN)
// 7
let n = 1000
/*do {
console.log(n)
(n / 2)
}while(n > 50) // непонятная херотень*/
// 8
let group = []
do{
let nums = +prompt("введите число", )
group + nums
}while(nums != [0, ''])
console.log(group)