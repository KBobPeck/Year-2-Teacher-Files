// const re = /test/
// const str = 'test1 coding test2 test.js'

// console.log(re.test(str))
// //expected outcome: true

// console.log(re.exec(str));
// //exected outcome:
// //[
// //   'test',
// //   index: 0,
// //   input: 'test1 coding test2 test.js',
// //   groups: undefined
// // ]

// console.log(str.match(re));
// //exected outcome:
// //[
// //   'test',
// //   index: 0,
// //   input: 'test1 coding test2 test.js',
// //   groups: undefined
// // ]

// console.log(str.replace(re, 'replaced'));
// //expected outcome: replaced1 coding test2 test.js

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//global
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const re = /test/g
const str = 'test1 coding test2 test.js'

console.log(re.test(str))
//still just true or false
//expected outcome: true

console.log(re.exec(str));
//only outputs once unless you set it up. we will get to that later
//this has WAY more uses later on
//exected outcome:
//[
//   'test',
//   index: 0,
//   input: 'test1 coding test2 test.js',
//   groups: undefined
// ]

console.log(str.match(re));
//[ 'test', 'test', 'test' ]
//exected outcome:
//[
//   'test',
//   index: 0,
//   input: 'test1 coding test2 test.js',
//   groups: undefined
// ]

console.log(str.replace(re, 'replaced'));
//expected outcome: replaced1 coding replaced2 replaced.js