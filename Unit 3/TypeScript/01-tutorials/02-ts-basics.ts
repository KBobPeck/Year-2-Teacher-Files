
const button = document.querySelector("button")
//we can use ! to say that it should never be null 
//and as to give it a type 
const TSinput1 = document.getElementById('input1')! as HTMLInputElement;
const TSinput2 = document.getElementById('input2')! as HTMLInputElement;

//add some types to the values
const TSadd = (num1:number, num2:any) => {
  return num1 + num2;
};

//add onclick to the button
button.addEventListener('click', () => {
  console.log(TSadd(+TSinput1.value, +TSinput2.value));
})

// compile to js using npx tsc 02-ts-basics.ts
//this creates a new js file that you can use in the html
