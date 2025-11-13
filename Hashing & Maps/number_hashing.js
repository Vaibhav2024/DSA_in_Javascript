let arr = [1, 2, 1, 3, 2]

let hashed_array = new Array(13).fill(0)

for (let i=0; i < arr.length; i++){
    hashed_array[arr[i]] += 1
}

console.log(hashed_array[1])
console.log(hashed_array[2])
console.log(hashed_array[3])


// 2
// 2
// 1


// [
//   0, 2, 2, 1, 0, 0,
//   0, 0, 0, 0, 0, 0,
//   0
// ] this is how the array look like