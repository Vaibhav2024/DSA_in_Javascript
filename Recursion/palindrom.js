let str = "MADAM"

function palindrom(i) {
    if (i >= str.length/2){
        return true
    }
    
    if (str[i] != str[str.length - i - 1]) {
        return false
    }
    return palindrom(i+1)
}

let result = palindrom(0)
console.log(result)

// true