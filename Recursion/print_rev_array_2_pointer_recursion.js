let arr = [1, 2, 3, 4, 5]

function reverse_an_array(i) {
    if (i >= arr.length/2){
        return arr
    }
    
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i- 1], arr[i]]
    return reverse_an_array(i+1)
}

let result = reverse_an_array(0)
console.log(result)

[5, 4, 3, 2, 1]