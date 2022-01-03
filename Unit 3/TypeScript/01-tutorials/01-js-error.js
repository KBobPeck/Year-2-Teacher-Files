const input1 = "4";
const input2 = "5";

const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(input1, input2));

//expected outcome is 9
//returned outcome is 45
//JS concats strings, TS lets up define these are numbers only to avoid this

// lets work in some typecasting

const addTypes = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return `your inputs are not the correct data types`;
  }
};

console.log(addTypes(input1, input2));

// this works but its easy to see how it can get annoying
// lets refactor again to check for any types

const types = (arg, type) => {
  if (!type) {
    throw new Error(`your variable needs a value and a type ${arg}`);
  } else if (typeof arg !== type) {
    throw new Error(`the value does not match the type ${arg}:${type}`);
  } else {
    return arg;
  }
};

const input3 = 1;
const input4 = 4;

const addTypeCheck = (num1, type1, num2, type2) => {
  try {
    return types(num1, type1) + types(num2, type2);
  } catch (err) {
    console.error(err);
  }
};

console.log(addTypeCheck(4, "number", 5, "number"));
console.log(addTypeCheck(4, "number", "5", "number"));
console.log(addTypeCheck(4, "number", 5, "string"));

//this is what we would need to do for any type casting in JS, luckily TS handles all this
