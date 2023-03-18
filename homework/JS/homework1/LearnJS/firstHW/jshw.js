//let WtUrName = prompt("как зовут то тебя епт?", "");
//alert(WtUrName)
// 2.6

let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(a, b, c, d) // 2, 2, 2, 1
// 2.8 первое

let a1 = 2
let x = 1 + (a *= 2)
console.log(a1, x) // 2, 5
// 2.8 второе

/*
"" + 1 + 0      = "10" string
"" - 1 + 0      = -1
true + false    = 1
6 / "3"         = 2
"2" * "3"       = 6
4 + 5 + "px"    = 9px string
"$" + 4 + 5     = $45 string
"4" - 2         = 2
"4px" - 2       = NaN
"  -9  " + 5    = "  -9  5"
"  -9  " - 5    = -14
null + 1        = 1
undefined + 1   = NaN
" \t \n" - 2    = -2
*/

// 2.8 третье

let ass3 = prompt("Первое число?", 1);
let b1 = prompt("Второе число?", 2);

alert(+b1 + +ass3);
//2.8 чатывертае (пробовал через Number так и не понял как это делать)

/*
5 > 4                   true
"ананас" > "яблоко"     false
"2" > "12"              false
undefined == null       true
undefined === null      false
null == "\n0\n"         false
null === +"\n0\n"       false
*/ 
//2.9