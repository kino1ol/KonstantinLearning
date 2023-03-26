let ask
for (let suka = 0; suka >= 100; suka++ ) {
    ask = prompt("мне нужно число больше ста")
    if (ask >= 100) {
        break
    }
}

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

