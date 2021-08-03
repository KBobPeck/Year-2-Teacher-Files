console.log(
  people.some((person) => {
    const { pet } = person;
    return pet === "none";
  })
);


