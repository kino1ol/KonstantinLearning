nameJs = prompt("какое оффициальное название JS?" )
if (nameJs == "ECMAScript") {
    alert('верно!')
}   else {
    alert("не верно, лох!")
}

let result = (a + b < 4) ? "мало" : "много"

/*if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
*/

let message = (login == 'Сотрудник') ? "Привет" :
    (login == 'Директор') ? "Здравствуйте" :
    (login == '') ? "Нет логина" :
    '' ;

/*if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
*/

let a = (1 || 'string' && 1 !== 1) ? true :
    a = true ? console.log('Yes') :
        a = true ? console.log('YesYes') :
    console.log('No!') :
    (a = ++) ? console.log('NoYes') ;
    
    

if (1 || 'string' && 1 !== 1) {
    if (a) {
            console.log('YesYes')
    }
    console.log('Yes')
} else {
    console.log('No!')
    if (a++) {
            console.log('NoYes')
    }
}