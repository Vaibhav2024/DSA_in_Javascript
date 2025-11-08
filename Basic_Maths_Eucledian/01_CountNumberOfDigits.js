function random(n) {
    count = 0
    while (n > 0) {
        n = Math.floor(n / 10)
        count += 1
    }
    console.log(count)
}

random(123)


// 3
// Time Complexity is O(log10(N))
// Whenever there is division happening the time complexity will be in log base form
// If the division is happening in manner og 2 then it will be O(log2(N))
