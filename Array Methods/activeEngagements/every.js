console.log(
  people.every((person)=>{
    const {age} = person;
    return age >= 10 || age <= 25
  })
)//false
console.log(
  people.every((person)=>{
    const {age} = person;
    return age >= 15 || age <= 30
  })
)//true
console.log(
  people.every((person)=>{
    const {age} = person;
    return age >= 20 || age <= 35
  })
)//false