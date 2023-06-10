let n = 10
for (let i = 2; i <= n; i++) {
    for(let simple = 2; simple < i; j++){
        if (i % simple == 0) continue
    }
    console.log(i)
}
