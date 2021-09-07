


let newArray = people.map((person) => {
  const { age, drink } = person;
  const alchDrinks = ["Beer", "Martini", "Margarita", "Wine", "Daiquari"];
  if (alchDrinks.includes(drink)) {
    return age < 21
      ? { ...person, ejected: "true" }
      : { ...person, ejected: "false" };
  }
  return { ...person, ejected: "false" };
});

console.log(newArray);
