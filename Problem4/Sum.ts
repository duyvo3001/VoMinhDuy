function sum_1(n: number) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sum_2(n: number) {
    return (n * (n + 1)) / 2;
}

function sum_3(n: number) {
    if (n === 1) {
        return 1; // Base case
    } else {
        return n + sum_3(n - 1)
    }
}

