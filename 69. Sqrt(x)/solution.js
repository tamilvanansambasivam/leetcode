//To  find the square root of number

mySqrt = function (x) {
    let ans = 0;
    for (i = 0; i * i <= x; i++) {
        ans = i;
    }
    return ans;
}
