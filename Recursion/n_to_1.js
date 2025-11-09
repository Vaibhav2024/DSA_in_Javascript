function print(i, n) {
    if (i < n) {
        return
    }
    console.log(i)
    print(i-=1, n)
}

print(10, 1)


// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1