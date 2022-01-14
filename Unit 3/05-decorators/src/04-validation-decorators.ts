//todo add the form to the HTML

interface ValidatorConfig {
  [property: string]: {
    //! this is the class name where you want to validate the properties
    [validatableProp: string]: string[]; //! ['required', 'positive']
  };
}

//*registredValidators {
//*  Course: {
//*   title: ['required']
//*   price: ['positive']
//*  }
//*}

//! this starts empty but everytime we add a deco to one of the props it is added to this list
const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  //! we add a key to registered validators using the class name (target.constructor.name)
  registeredValidators[target.constructor.name] = {
    //! add all the validators on the list back to the list
    ...registeredValidators[target.constructor.name],
    //! add the new validator to the list, this adds the property name, and the fact it is required
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  //! when this function is used it will search the registeredValidators object for for a key matching the class we want to check
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  //! next we loop through every prop in the object and check the validator
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  //! this will validate the created course
  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }

  //! normally here would be the place where you save the created class to somewhere if it passed validation, otherwise when the validator fails the class will not be saved and then just disappear1
  console.log(createdCourse);
});
