/*1
let name1 = prompt("ваше имя?", '')
let CITY = prompt("ваше CITY?", '')
let age = prompt("ваше age?", )
let email = prompt("ваше email?", '')
alert(`меня зовут - ${name1}, живу в городе ${CITY}, мне  ${age}  лет. контакты:  ${email}` )
//2
let birth = 2023 - age
alert(`родился в ${birth} году`)
*/
//4
let as = [1, 0, -3]
let rand = Math.floor(Math.random() * as.length)
if (as[rand] < 0) {
    alert("верно")
}
else if (as[rand] == 0) {
    alert("равно 0")
}
else {
    alert('не верно')
}
//5
let a = 10
let b = 2
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
if ((a + b) > 1) {
    console.log(a+b**2)
}
//6
if (11 > a > 2 || 14 > b >= 6) {
    console.log('true')
}
else {
    console.log("false")
}
//7
let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 ,24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41 ,42, 43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]
let numrandom = Math.floor(Math.random() * n.length)
switch (n[numrandom]) {
    case n <= 14:
        console.log("первая четверть");
    case 14 < n <= 29:
        console.log("вторая четверть");
    case 29 < n <= 44:
        console.log("третья четверть");
    case n > 44:
        console.log("четвертая четверть")
}

//8

//9
let days = prompt("введите кол-во дней" )
let years = days / 365
let months = days / 31
let weeks = days / 7
alert(`всего ${years} лет,${months} месяцев,${weeks} недель.`)
//10
switch (days) {
    case (1 < days <= 59 || 334 < days <= 365):
        alert("зима");
        break;
    case (59 < days <= 151): 
        alert("весна");
        break;
    case (151 < days <= 243):
        alert("лето");
        break;
    case (243 < days <= 334):
        alert("осень");
        break;
    default:
        alert("никакая блять пора года")
}