function pattern(n) {
    for (let i=0; i < 2*n-1; i++) {
        for (let j=0; j < 2*n-1; j++){
            let top = i
            let left = j
            let right = (2*n - 2) - j
            let down = (2*n - 2) - i
            let val = n - Math.min(Math.min(top, down), Math.min(left, right));
            process.stdout.write(val.toString());
        }
        console.log()
    }
}

pattern(4)


// 4444444
// 4333334
// 4322234
// 4321234
// 4322234
// 4333334
// 4444444