let max = 0;
let min = 1027;
let dugHoles = [];
let cols = [];
let rows = [];

for (holes of input) {
  let rmax = 127;
  let rmin = 0;
  let cmax = 7;
  let cmin = 0;

  for (letter of holes) {
    if (letter == "F") rmax = Math.floor((rmax + rmin) / 2);
    if (letter == "B") rmin = Math.ceil((rmax + rmin) / 2);
    if (letter == "L") cmax = Math.floor((cmax + cmin) / 2);
    if (letter == "R") cmin = Math.ceil((cmax + cmin) / 2);
  }
  const sqNum = rmax * 8 + cmax;
  rows.push(rmax);
  cols.push(cmax);
  dugHoles.push(sqNum);
  if (sqNum > max) max = sqNum;
  if (sqNum < min) min = sqNum;
}
console.log(min, max); //51 832

let missingSquare;
for (let i = min; i <= max; i++) {
  if (dugHoles.some((hole) => hole == i)) {
    continue;
  } else {
    missingSquare = i;
    console.log(i); //517
    break;
  }
}

let col = 0; //5
let row = 0; //64

col = missingSquare % 8;
row = (missingSquare - col) / 8;

// while (missingSquare % 8 != 0) {
//   col++;
//   missingSquare--;
// }
// row = missingSquare / 8;

let rmax = 127;
let rmin = 0;
let cmax = 7;
let cmin = 0;
let codedHole = "";

while (rmax != rmin) {
  let middle = (rmax + rmin) / 2;
  if (row > middle) {
    codedHole += "B";
    rmin = Math.ceil(middle);
  }
  if (row < middle) {
    codedHole += "F";
    rmax = Math.floor(middle);
  }
}
while (cmax != cmin) {
  let middle = (cmax + cmin) / 2;
  if (col > middle) {
    codedHole += "R";
    cmin = Math.ceil(middle);
  }
  if (col < middle) {
    codedHole += "L";
    cmax = Math.floor(middle);
  }
}

console.log(codedHole); //BFFFFFFFRLR

// rows.reduce((total, row) => {
//   return total+row
// })

let rowTotal = rows.reduce((total, row) => total + row, 0);
let colTotal = cols.reduce((total, col) => total + col, 0);

console.log(rowTotal * colTotal); // 116964000

//
const content = document.getElementById("content");
for (let i = 0; i <= 1027; i++) {
  let dug = dugHoles.some((hole) => hole == i);
  content.innerHTML += `<div class='hole ${dug ? "dug" : "undug"}'>
    row: ${(i - (i % 8)) / 8} - col: ${i % 8}
  </div>`;
}
