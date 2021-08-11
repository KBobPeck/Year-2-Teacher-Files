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

// let mDrinks = drinks.filter(drinks = return drinks == "M...")
// Expected Outcome
// mDrinks = ['Milkshake', 'Milk', 'Martini', 'Margarita']

let mDrinks = drinks.filter((drink) => {
  return drink.startsWith("M");
});
let mDrinks = drinks.filter((drink) => drink.startsWith("M"));
let mDrinks = drinks.filter((drink) => drink[0]("M"));
let mDrinks = drinks.filter((drink) => drink.charAt(0) === "M");
let mDrinks = drinks.filter((drink) => drink.substring(0, 1) === "M");

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
  {
    color, index;
  }
});

let newArray = colors.map((color, index) => {
  return { color: color, index: index };
});
let count = -1;
let newArray = colors.map((color) => {
  count++;
  return { color: color, index: count };
});
let count = -1;
let newArray = colors.map((color) => {
  return { color: color, index: count++ };
});
let count = 0;
let newArray = colors.map((color) => {
  return { color: color, index: ++count };
});
let newArray = colors.map((color, index) => ({ color: color, index: index }));
let newArray = colors.map((color, index) => ({ color, index }));
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
  pets = pet.capitalize();
});
// Expected Outcome
// pets = ["Snake", "Dog", "Cat", "Fish", "Lizard", "Bird", "Rabbit"];
///////////////////////////////////////////////////////////////

pets = pets.map((pet) => {
  return pet[0].toUpperCase() + pet.slice(1);
});
pets = pets.map((pet) => pet[0].toUpperCase() + pet.substring(1));
pets = pets.map((pet) =>
  pet.split("").splice(0, 1, pet[0].toUpperCase).join("")
);
pets = pets.map((pet) => {
  pet[0] = pet[0].toUpperCase();
  return pet;
});
