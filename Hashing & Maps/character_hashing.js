// using hashing on character string

let alpha_array = new Array(26).fill(0)

str = "abcdabefc"

for (let i=0; i < str.length; i++) {
    alpha_array[str.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
}

console.log(alpha_array)


let user_input = prompt("Enter the character in lowercase: ")
console.log(alpha_array[user_input.charCodeAt(0) - 'a'.charCodeAt(0)])


// [
//   2, 2, 2, 1, 1, 1, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0
// ]