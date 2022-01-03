"use strict";
var button = document.querySelector("#button");
var testArray = [1, 2, 3, 4];
button === null || button === void 0 ? void 0 : button.addEventListener("click", function (e) { return console.log("testing"); });
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curr, next) {
        return curr + next;
    }, 0);
};
var logging = function (out) {
    console.log(out);
};
var num1 = testArray[0], num2 = testArray[1];
console.log(add.apply(void 0, testArray));
