// sum of N numbers using recursion
sum = 0
function find_sum(i, n) {
    if (i > n) {
        return
    }
    sum += i
    find_sum(i+=1, n)
    return sum
}

let result = find_sum(1, 10)
console.log(result)


// Or
// // Paramterized recursion
// function find_sum(i, sum) {
//     if (i < 1) {
//         console.log(sum)
//         return
//     }
//     find_sum(i-1, sum+i)
// }

// find_sum(10, 0)


// Or
// // functional recursion

// function find_sum(n) {
//     if (n==0){
//         return 0
//     }
    
//     return n + find_sum(n-1)
// }

// let result = find_sum(10)
// console.log(result)





// O(N)