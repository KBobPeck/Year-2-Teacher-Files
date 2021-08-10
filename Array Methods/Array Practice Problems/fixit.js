const drinks = [
  "Soda",
  "Coffee",
  "Lemonade",
  "Iced tea",
  "Juice",
  "Milkshake",
  "Water",
  "Milk",
  "Beer",
  "Martini",
  "Margarita",
  "Wine",
  "Daiquari",
];
let mDrinks = drinks.filter(drinks = return drinks == "M...")
// Expected Outcome
// mDrinks = ['Milkshake', 'Milk', 'Martini', 'Margarita']
/////////////////////////////////////////////////////////////////////
const colors = [
  "red",
  "black",
  "white",
  "blue",
  "purple",
  "orange",
  "green",
  "yellow",
];

let newArray = colors.map((index) => {
  {color, index;}
})
// Expected Outcome
// [
//   { color: "red", index: 0 },
//   { color: "black", index: 1 },
//   { color: "white", index: 2 },
//   { color: "blue", index: 3 },
//   { color: "purple", index: 4 },
//   { color: "orange", index: 5 }
// ];

///////////////////////////////////////////////////////////
const pets = ["snake", "dog", "cat", "fish", "lizard", "bird", "rabbit"];

pets = pets.map((pet) => {
  pets = pet.capitalize()
})
// Expected Outcome
// pets = ["Snake", "Dog", "Cat", "Fish", "Lizard", "Bird", "Rabbit"];
///////////////////////////////////////////////////////////////
