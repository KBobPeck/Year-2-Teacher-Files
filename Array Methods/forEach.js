let neededDrinks = {};

people.forEach((person) => {
  const { drink } = person;
  neededDrinks[drink] ? (neededDrinks[drink] += 1) : (neededDrinks[drink] = 1);
});

console.log(neededDrinks);
