let appId : string = 'abc';
const button = document.querySelector('button')!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  // let userName = 'Max';
  console.log('Clicked! ' + message);
}

button?.addEventListener('click', clickHandler.bind(null, "You're welcome!"));

// if (button) {
//   button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
// }

//or add a ! at the end of the variable declaration
