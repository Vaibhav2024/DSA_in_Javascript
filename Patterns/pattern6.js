function pattern(n) {
    for (let i=0; i<n; i++){
        for (let j=1; j<=n-i; j++){
            process.stdout.write(`${j} `)
        }
        console.log()
    }
}
pattern(5)

// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 
