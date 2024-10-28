function isPrime(number) {
    if (number <= 1) {
        console.log(`Число ${number} не є простим числом.`);
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(`Число ${number} не є простим числом.`);
            return;
        }
    }

    console.log(`Число ${number} є простим числом.`);
};
isPrime(33)