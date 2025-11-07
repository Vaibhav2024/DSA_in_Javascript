function pattern(n) {
    for (let i=0; i<n; i++){
        for (let a=0; a<n-i-1; a++){
            process.stdout.write(" ")
        }
        for (let b=0; b < 2*i+1; b++){
            process.stdout.write("*")
        }
        for (let c=0; c<n-i-1; c++){
            process.stdout.write(" ")
        }
        console.log()
    }
}
pattern(5)

//          *    
//         ***   
//        *****  
//       ******* 
//      *********
