// printing from N to 1 in reverse order using recursion
function print(i, n) {
    if (i < n) {
        return
    }
    print(i-=1, n)
    console.log(i)
}

print(10, 1)




// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
