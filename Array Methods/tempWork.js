
const firstNames = [
  'Sneha',      'Ayyub',    'Anoushka', 'Chanel',  'Zoey',
  'Vanessa',    'Nahla',    'Falak',    'Iram',    'Florrie',
  'Brooke',     'Elinor',   'Abdallah', 'Anna',    'Shiv',
  'Inaaya',     'Ritik',    'Kamron',   'Iosif',   'Farhana',
  'Justin',     'Kelsey',   'Clarissa', 'Roshni',  'Waleed',
  'Ahyan',      'Daniella', 'Tyreece',  'Sheikh',  'Antoni',
  'Markus',     'Malachy',  'Devante',  'Eamonn',  'Gloria',
  'Adnaan',     'Bethanie', 'Tymon',    'Jorden',  'Adelina',
  'Kristopher', 'Victor',   'Eisa',     'Kian',    'Om',
  'Kirk',       'Ashlee',   'Efe',      'Glen',    'Finlay',
  'Kirandeep',  'Hermione', 'Bianka',   'Jasleen', 'Nishat',
  'Lester',     'Filip',    'Mehak',    'Uwais',   'Arley',
  'Abbie',      'Nikkita',  'Simone',   'Ayrton',  'Aronas',
  'Matylda',    'Darrell',  'Reis',     'Sanaa',   'Winnie',
  'Clyde',      'Annie',    'Elly',     'Amaya',   'Chandler',
  'Jaydn',      'Cormac',   'Murray',   'Ali',     'Emilie',
  'Nazifa',     'Gregg',    'Zahid',    'Ibrahim', 'Joe',
  'Ammar',      'Kaine',    'Fatimah',  'Eben',    'Rafe',
  'Mathias',    'Cobie',    'Shayla',   'Hadiya',  'Ameer',
  'Zuzanna',    'Cara',     'Anisah',   'Kelly',   'Caolan'
] 
const lastNames = [
  'Dunlap',   'Herman',    'Barber',     'Tierney',    'Mcloughlin',
  'Daly',     'Francis',   'Mullen',     'Mays',       'Mcgowan',
  'Mccarty',  'Rayner',    'Hancock',    'Burnett',    'Wagner',
  'Driscoll', 'Roy',       'Berger',     'Henry',      'Durham',
  'Gardner',  'Yu',        'Gilliam',    'Portillo',   'Mcdaniel',
  'Kline',    'Hobbs',     'Haney',      'Person',     'Nava',
  'Bright',   'Steele',    'Blackburn',  'Ray',        'Traynor',
  'Lowe',     'Armstrong', 'Bowes',      'Weeks',      'Harrington',
  'Bush',     'Wolf',      'Mansell',    'Marsden',    'Finney',
  'Hensley',  'Dale',      'Britton',    'Schmitt',    'Hutton',
  'Kearney',  'Warren',    'Hampton',    'Galloway',   'Iles',
  'Nixon',    'Hickman',   'Ellison',    'Rich',       'Rooney',
  'Hoffman',  'Munro',     'Simmonds',   'Lopez',      'Johnston',
  'Redfern',  'Bonner',    'Mclaughlin', 'Mitchell',   'Harrell',
  'Hughes',   'Flower',    'Fraser',     'Roth',       'Denton',
  'Mathis',   'Marriott',  'Marsh',      'Shepard',    'Black',
  'Mcintosh', 'Nichols',   'Harvey',     'Cartwright', 'Mills',
  'Walter',   'Levy',      'Barton',     'Griffiths',  'Wiley',
  'Piper',    'Potts',     'Bates',      'Irvine',     'Mueller',
  'Samuels',  'Redman',    'Robbins',    'Kemp',       'Perkins'
]
const colors = ['red', 'black', 'white', 'blue', 'purple', 'orange', 'green', 'yellow']

const drinks = [
  'Wine',
  'Coffee',
  'Lemonade',
  'Iced tea',
  'Martini',
  'Margarita',
  'Juice',
  'Milkshake',
  'Daiquari',
  'Water',
  'Milk',
  'Beer',
  'Soda',
]
const jobs = [
  'Fitness Worker',
  'IT Specialist',
  'Loan Officer',
  'Historian',
  'Photographer',
  'Bus Driver',
  'Farmer',
  'Automotive mechanic',
  'Janitor',
  'Cashier'
]

const pets = [
  'snake', 
  'dog',
  'cat',
  'fish',
  'lizard',
  'bird',
  'rabbit',
]

let peopleArray = []
let usedNames = []
let content = document.querySelector('#content');

let newPersonObjects = () => {

  let age = Math.floor(Math.random()*15)+16

  let name = ''
  do{
    name = `${firstNames[Math.floor(Math.random()*firstNames.length)]} ${lastNames[Math.floor(Math.random()*firstNames.length)]}`
  }while (usedNames.some((singleUsedName) => {
    return name === singleUsedName
  }))

  let shirtColor = colors[Math.floor(Math.random()*colors.length)]

  let drink = drinks[Math.floor(Math.random()*drinks.length)]

  let job = jobs[Math.floor(Math.random()*jobs.length)]

  let pet = Math.floor(Math.random()*4);
  if(pet == 1) {
    pet = 'none';
  }else{
    pet = pets[Math.floor(Math.random()*pets.length)]
  }

  return {age,
  name,
  shirtColor,
  drink,
  job,
  pet}
}



for(let i = 0; i < 1000; i ++){
  peopleArray.push(newPerson())
}

content.innerHTML = JSON.stringify(peopleArray)


console.log(peopleArray)