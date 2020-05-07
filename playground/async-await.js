const add = (a, b) => {
    return new Promise((resolve, reject) => {   // add() returns a Promise
        setTimeout(() => {
            if (a < 0 || b < 0) {       // a, b must be positive
                return reject('Numbers must be positive.')
            }

            resolve(a + b);     // runs if a & b are positive

        }, 2000)    // 2 second delay
    })
}

// defining the doWork function with async-await
const doWork = async () => {
    const sum = await add(1, 99)        // wait 2 seconds, 100
    const sum2 = await add(sum, 50)     // wait 2 seconds, 150
    const sum3 = await add(sum2, 3)     // wait 2 seconds, 153
    return sum3;    // none of the numbers above appear; after 6 seconds we get 153
}

// calling doWork using async-await instead of promise-chaining with multiple then-stmts
doWork().then((result) => {
    console.log('result', result);
}).catch((e) => {
    console.log('e', e);
})

console.log(doWork())