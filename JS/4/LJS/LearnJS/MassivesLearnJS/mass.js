/*
let styles = ["Джазз","Блюз"]
styles.push("Рок-н-ролл")
console.log(styles)

//function arrCenter(styles){
//    if                                      *мозг сделал бум*
//}

styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");
console.log(styles)
*/

let arr = []
function sumInput(){
    while (true) {
        num = +prompt("введите числовое значение", )
        if (num === "" || num === null || !isFinite(num)) break;
        arr.push(+num)
      }
    let sum = 0
    for (let numbar of arr) {
        sum += numbar 
    }
    return sum
}
alert(sumInput())
console.log(arr)