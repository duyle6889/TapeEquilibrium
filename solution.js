// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var tot = 0;
    var upto = 0;
    var min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < A.length; i++) {
        tot += A[i];
    }

    for (let i = 0; i < A.length-1; i++) {
        upto += A[i];
        var a1 = upto;
        var a2 = tot - a1;
        var dif = Math.abs(a1 - a2);
        if (dif < min) {
            min = dif;
        }
    }
    return min;
}
