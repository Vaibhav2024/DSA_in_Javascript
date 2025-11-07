function pattern(n) {
    for (let i=0; i<n; i++) {
        
        for (let j=0; j < (n-i-1); j++) {
            process.stdout.write(" ")
        } 
        
        for (let j = 0; j <= i; j++) {
            process.stdout.write(String.fromCharCode('A'.charCodeAt(0) + j));
        }

        // Print decreasing characters (BA, CBA, ...)
        for (let j = i - 1; j >= 0; j--) {
            process.stdout.write(String.fromCharCode('A'.charCodeAt(0) + j));
        }
        
        
        for (let j=0; j < (n-i-1); j++) {
            process.stdout.write(" ")
        }
        console.log()
    }
}

pattern(4)

//    A   
//   ABA  
//  ABCBA 
// ABCDCBA