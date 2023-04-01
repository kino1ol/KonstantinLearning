

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
/*
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }
*/
let is = 0
while (is < 3) {
    alert(`number ${is}`)
    is++
}

let ask
do {
    ask = +prompt(`введите число больше ста`, )
    console.log(ask)
}
while (ask < 100)