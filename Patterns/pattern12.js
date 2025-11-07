function pattern(n) {
    let space = 2 * (n-1)
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=i; j++){
            process.stdout.write(`${j}`)
        }
        
        for(let j=1; j <= space; j++) {
            process.stdout.write(" ")
        }
        
        for (let j=i; j >= 1; j--){
            process.stdout.write(`${j}`)
        }
        console.log()
        space -= 2
    }
}

pattern(4)

// 1      1
// 12    21
// 123  321
// 12344321