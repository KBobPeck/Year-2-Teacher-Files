



const regex1 = /t(e)(st(\d?))/g;
const str1 = 'asdfa test1 something test2';
let array1;
const map = {
  '>':'$gt',
  '<':'$lt',
  '>=':'$gte',
  '<=':'$lte',
  '=':'$eq',
}

const re = /testing/
while ((array1 = regex1.exec(str1)) !== null) {
  console.log(array1, `Next starts at ${regex1.lastIndex}.`);
}


const numericFilters = 'price<40,rating<=4'
const operatorMap = {
  '>': '$gt',
  '>=': '$gte',
  '=': '$eq',
  '<': '$lt',
  '<=': '$lte',
}
const regEx = /\b(<|>|>=|=|<|<=)\b/g
let filters = numericFilters.replace(
  regEx,
  (match) => `-${operatorMap[match]}-`
)

console.log(filters);

/[A-Za-z0-9_]/

console.log(/\W?\d{3}\W?\d{3}\W?\d{4}/.test('123123152'));