const button:HTMLDivElement = document.querySelector("#button")!;

const testArray = [1, 2, 3, 4];

button?.addEventListener("click", (e) => console.log("testing"));

const add = (...numbers: number[]) => {
  return numbers.reduce((curr, next) => {
    return curr + next;
  }, 0);
};
const logging = (out:number[]) => {
  console.log(out)
}
const [num1, num2] = testArray

console.log(add(...testArray)); 
