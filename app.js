function add(n1, n2, showResult, pharse) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!')
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(pharse + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var PrintResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, PrintResult, resultPhrase);
