function add1(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
  return void 0
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const shouldPrint = true;
let resultPhrase = 'Result is: ';

add1(number1, number2, shouldPrint, resultPhrase);
