let highestSeatID = 1
let takenSeats = [];
let cols = []
let rows = []

for (seat of input) {
  let rmax = 127;
  let rmin = 0;

  let cmax = 7;
  let cmin = 0;

  for (letter of seat) {
    if (letter === "F") rmax = Math.floor((rmax + rmin) / 2);
    if (letter === "B") rmin = Math.ceil((rmax + rmin) / 2);

    if (letter === "L") cmax = Math.floor((cmax + cmin) / 2);
    if (letter === "R") cmin = Math.ceil((cmax + cmin) / 2);
  }

  cols.push(cmax)
  rows.push(rmax)
  const seatID = rmax * 8 + cmax;


  if(seatID > highestSeatID) highestSeatID = seatID
  takenSeats.push(seatID);
}

takenSeats = takenSeats.sort((a,b) => {
  return a - b
})

let minSeat = takenSeats[0]
for(num of takenSeats){
  if(num !== minSeat){
    break 
  } 
  minSeat++
}

let colTotoal = cols.reduce((acc, nxt) => {
  return acc + nxt
}, 0)
let rowTotal = rows.reduce((acc, nxt)=>{
  return acc + nxt
}, 0)

console.log(`The highest filled seat is ${highestSeatID}`);//#1
console.log(`The missing seat is ${minSeat}`);//#2
console.log((517-5)/8); //#3 'BFFFFFFRLR' Row 64 Col 5
console.log(colTotoal*rowTotal);//#4


