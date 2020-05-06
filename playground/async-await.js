const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000)
    })
}

const doWork = async () => {
    return 'Jordan';
}

console.log(doWork())