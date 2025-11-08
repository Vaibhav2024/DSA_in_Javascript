function random(n) {
    let my_num = n
    let rev_num = 0
    while (n > 0) {
        digit = n % 10
        rev_num = (rev_num * 10) + digit
        n = Math.floor(n / 10)
    }
    if (rev_num === my_num) {
        console.log("The Number is Palindrom")
    } else{
        console.log("The Number is Not Palindrom")
    }
}

random(1221)

// Output: The number is Palindrom