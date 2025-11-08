// Calculating how many number are divisor of the given Number
function random(n) {
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            process.stdout.write(`${i}, `)
        }
    }
}

random(36)


// Or

// function random(n) {
//     numbers = []
//     for (let i = 0; i <= n; i++) {
//         if (n % i == 0) {
//             numbers.push(i)
//         }
//     }
//     console.log(numbers)
// }

// random(36)


// //Optimal way to do so

// function random(n) {
//     numbers = []
//     for (let i = 0; i * i<= n; i++) {
//         if (n % i == 0) {
//             numbers.push(i)
//             if((n/i) != i) {
//                 numbers.push(n/i)
//             }
//         }
//     }
//     console.log(numbers.sort((a, b) => a - b))
// }

// random(36)

// [
//   1,  2,  3,  4, 6,
//   9, 12, 18, 36
// ]
// O(√n log n)

// so if we use sort() function it takes log amount of time
