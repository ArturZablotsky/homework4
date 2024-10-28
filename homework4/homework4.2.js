function isPerfect(number) {
    let sum = 0;
    for (let a = 1; a <= number / 2; a++) {
        if (number % a === 0) {
            sum += a;
        }
    }
    return sum === number;
}

function findPerfectNumbers(N) {
    for (let a = 1; a <= N; a++) {
        if (isPerfect(a)) {
            console.log(a);
        }
    }
};