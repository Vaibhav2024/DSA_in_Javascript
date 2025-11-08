function random(n) {
    let count = 0
    for (let i = 0; i*i <= n; i++) {
        if (n % i == 0) {
            count += 1
        }
    }
    if (count == 2) {
        console.log("The Number is Prime Number")
    } else {
        console.log("The Number is Not Prime")
    }
}

random(36)