'use strict';
// console.log(1, 2, "3");

// Types of data JS
// number  1,2,3,4
// string '1', '2'
'123', "123", `213`
// Boolean 
true
false
// null
null
// undefined
undefined
// Object
{
    property: 1
}
// BigInt
// Symbol pop: 1; pop: 1

///
// Variables
var number = 1
let str = 'string'
str = "any string"
const isTrue = true

let number1 = 1,
    number2 = 2,
    number3 = 3;
const str1 = 'str1',
    str2 = 'str2';

number1 > number2 // false
// console.log(number2 > number1) // true
1 < 2 // true
2 <= 2 // true
3 >= 3 // true
1 === 2 // false
1 == 2 // false
'2' === '3' // false
2 === '2' // false
2 == '2' // true
2 !== '2' // true
2 !== 2 // false
2 != '2' // false
2 !== '2' // true
2 != 2 // false
let count = 2 + 2 / 2
count = 5 % 2
console.log(count)

1 || 1 // or
1 && 1 // and
false || false || true || false // true

true && true && false // false

true || false && false || true // true
(true || false) && (false || true) // true

1 || 0 // 1
1 && 0 // 0

1 || 0  && 0 || 1 // 1
(1 || 0 || 1 || 0) && (0 || 1 || 1) // 1
(1 && 0 && 1 && 0) && (0 && 1 && 1) // 0
(1 && 0 && 1 && 0) || (0 && 1 && 1) // 0
1 && 0 || 1 && 0 || 0 && 1 || 1  // 1

'' && '1' // ''

3 > 2 || 1 > 5 && '1' !== '1' || 1 != '2' // true

console.log(`123213
123123213 sadsa
asdad

sadsadsadsa 
${number1} + ${number1}`)

console.log(1 + '1' + 1 + 1)
console.log(1 + 1 + 1 + 1)