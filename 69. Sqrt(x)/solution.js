mySqrt = function (x) {
    let ans = 0;  // Start with a variable called 'ans' set to 0.

    // Start a loop with a counter 'i' set to 0. Keep looping as long as 'i * i' is less than or equal to 'x'.
    for (i = 0; i * i <= x; i++) {
        ans = i;  // If 'i * i' is less than or equal to 'x', update the 'ans' variable with the current value of 'i'.
    }

    return ans;  // Finally, return the value stored in 'ans' as the result.
}




