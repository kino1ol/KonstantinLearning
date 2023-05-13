function checkAge(age) {
    (age > 18) ? true : confirm('Родители разрешили?');
     
}

function checkAge(age) {
    (age > 18) || confirm('Родители разрешили?');
     
}
let a = 10
let d = 5
function min(a, d) {
    if (a < d) {
        console.log(a)
    }
    else {
        console.log(d)
    }
}
min(a, d)


function pow(x, n) {
    let z = (x ** n)
    console.log(z)
    if (x < 1) {
        alert("поддерживаются только натуральные числа")
    }
    if (n < 1) {
        alert("поддерживаются только натуральные числа")
    }
   
    
}
x = prompt("введите х", )
n = prompt("введите n", )

pow(x, n)