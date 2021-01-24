const names: Array<string> = []

const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(7)
    }, 2000)
})

promise.then(data => {
    // data.split(' ')
})