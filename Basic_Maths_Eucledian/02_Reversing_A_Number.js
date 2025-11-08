function random(n) {
    while (n > 0) {
        digit = n % 10
        n = Math.floor(n / 10)
        process.stdout.write(`${digit}`)
    }
}

random(123)



// Or 


// function random(n) {
//     let rev_num = 0
//     while (n > 0) {
//         digit = n % 10
//         rev_num = (rev_num * 10) + digit
//         n = Math.floor(n / 10)
//     }
//     console.log(`${rev_num}`)
// }

// random(123)





// output: 321