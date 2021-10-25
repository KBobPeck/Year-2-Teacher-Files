//1
//create a regex that matches the word 'testing' 
const re1 = /testing/

//2
//create a regex that checks for 3 numbers followed by 4 letters
const re2 = /\d{3}\w{4}/

//3
//Create a regex to tell if a number is a valid phone number
//the 3 valid formats are:
// (123)123-1234
// 1234567890 
// 123-123-1234 
const re3 = /\W?\d{3}\W?\d{3}\W?\d{4}/

//4
//create a regex that matches an IP address ###.###.###.###
//there can be 1-3 digits in each of those places 
//the digits cant be higher than 255 for a challange
//    12.142.44.1 is allowed  
//    414.241.231.414 is also allowed
//    1.1.1.1 is allowed
//    123.123.1234.12 is not allowed
const re4 = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/ 

const re4c = /\[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]\.[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]\.[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]\.[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]/ 

//5
//Create a regex that tests a string with the following conditions
//1. the first 40 chars are any letters or any even number, 
//2. the last 5 chars are are odd numbers or whitespace
//challange the string MUST be 45 char long

const re5 = /[a-zA-Z24680]{40}[\s13579]{5}/
const re5c = /^[a-zA-Z24680]{40}[\s13579]{5}$/
