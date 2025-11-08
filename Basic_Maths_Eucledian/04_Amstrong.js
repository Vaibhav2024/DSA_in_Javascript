function random(n) {
    dup_num = n
    let sum = 0
    while (n > 0) {
        digit = n % 10
        sum = sum + (digit * digit * digit)
        n = Math.floor(n / 10)
    }
    if (sum == dup_num) {
        console.log("The Number is Amstrong Number")
    } else {
        console.log("The Number is Not Amstrong")
    }
}

random(371)


// The Number is Amstrong Number