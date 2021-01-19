function add(n1: number, n2: number, showResult: boolean, pharse: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!')
    // }
    const result = n1 + n2
    if (showResult) {
        console.log(pharse + result)
    } else {
        return n1 + n2
    }
}

let number1 : number
number1 = 5
const number2 = 2.8
const PrintResult = true
const resultPhrase = 'Result is: '

add(number1, number2, PrintResult, resultPhrase)