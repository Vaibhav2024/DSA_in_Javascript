function pattern(n) {
    space = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= n-i-1; j++) {
            process.stdout.write("*")
        }
        
        for (let j = 0; j < space; j++) {
            process.stdout.write(" ")
        }
        
        for (let j = n-i; j > 0; j--) {
            process.stdout.write("*")
        }
        console.log()
        space += 2
    }
}

function pattern_second(n) {
    space = 2 * (n-1)
    for (let i=0; i < n; i++) {
        for (let j=0; j <= i; j++) {
            process.stdout.write("*")
        }
        
        for (let j=space; j > 0; j--) {
            process.stdout.write(" ")
        }
        
        for (let j=0; j <= i; j++) {
            process.stdout.write("*")
        }
        console.log()
        space -= 2
        
    }
}

pattern(5)
pattern_second(5)

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********