let output = {
  valid: 0,
  invalid: 0,
};
const required = ["bry", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

data.map((passport) => {
  for (prop of required) {
    console.log(
      prop,
      Object.keys(passport).some((x) => x == prop)
    );
    //   if (Object.keys(passport).some((x) => x != prop)) {
    //     return output["invalid"]++;
    //   }
    // }
    // return output["valid"]++;
  }
});

console.log(output);
