let avg =
  people.reduce((tot, nxt) => {
    const { age } = nxt;
    return tot + age;
  }, 0) / 1000;

console.log(avg);
//23.093
