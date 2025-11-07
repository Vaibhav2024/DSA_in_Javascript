function pattern(n) {
    for (let i=0; i<n; i++) {
        for(let j=0; j <= (n-i-1); j++) {
            process.stdout.write(String.fromCharCode('A'.charCodeAt(0) + j) + " ")
        }
        console.log()
    }
}

pattern(5)

// A B C D E 
// A B C D 
// A B C 
// A B 
// A 
