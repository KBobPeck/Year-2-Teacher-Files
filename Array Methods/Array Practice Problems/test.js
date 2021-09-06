const pets = ["snake", "dog", "cat", "fish", "lizard", "bird", "rabbit"];

// let Pets = pets.map((pet) => {
//   return pet[0].toUpperCase() + pet.slice(1);
// });
let Pets = pets.map((pet) => {
  return pet.split("").splice(0, 1, pet[0].toUpperCase).join("");
});

console.log(Pets);
