

let kaines = people.filter((person) => {
  const {name} = person
  // console.log(name.split(' ')[0] );
  return name.split(' ')[0] === 'Kaine'
})

console.log(kaines);