function pattern(n) {
    for (let i=0; i<n; i++){
        for (let j=0; j<= i; j++) {
            process.stdout.write("* ")
        }
        console.log()
    }
    for (let i=0; i<n-1; i++) {
        for (let j=0; j < n-i-1; j++){
            process.stdout.write("* ")
        }
        console.log()
    }
    
}
pattern(5)


// or

function pattern(n) {
    for (let i=1; i <= 2*n-1; i++){
        let iterator = i
        if(i > n) iterator = 2*n-i
        for (let j=1; j <= iterator; j++){
            process.stdout.write("*")
        }
        console.log()
    }
}
pattern(5)


// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 