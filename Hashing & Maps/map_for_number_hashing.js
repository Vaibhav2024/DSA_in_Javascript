// Using maps for hashing so that we don’t need to get those many number of 0 

// Step 1: The array of numbers
let arr = [1, 2, 3, 2, 1, 2];

// Step 2: Create a Map to count frequencies
let freq = new Map();

// Count how many times each number appears
for (let num of arr) {
  if (freq.has(num)) {
    freq.set(num, freq.get(num) + 1);
  } else {
    freq.set(num, 1);
  }
}

// Step 3: The queries (numbers to check)
let queries = [1, 2, 4];

// Step 4: Print how many times each query number appears
for (let q of queries) {
  console.log(freq.get(q) || 0);
}



// 2
// 3
// 0



// for (let [key, value] of freq) {
//   console.log(key, value);
// }

// Map(3) { 1 => 2, 2 => 3, 3 => 1 }
// map looks something like this, this is different map don’t associate with above output