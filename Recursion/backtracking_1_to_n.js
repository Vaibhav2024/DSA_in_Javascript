function print(i) {
    if (i < 1) {
        return
    }
    
    print(i -= 1)
    console.log(i)
    
}

print(10)



// Over there look closely we have written the console.log() outside the function calling so after the base condition gets git then when the stack tries to get freid up that’s the time when the 1 to 9 will be printed and if you write console.log() before print(i-=1) then we will receive output from 10 to 1 because its getting executed in function calling