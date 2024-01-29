var doSomething = function (person, age, isMarried) {
    console.log("Hello ".concat(person));
    console.log("".concat(person, " is ").concat(age));
    console.log("".concat(person, " is ").concat(isMarried));
};
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hello ".concat(person, "!");
}
greet();
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return Math.random() * num;
}
var add = function (num1, num2) { return num1 + num2; };
var colors = ["red", "green", "blue", "yellow", "purple"];
colors.map(function (color) { return color.toUpperCase(); });
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
var neverStop = function () {
    while (true) {
        console.log("Hello, I will never stop");
    }
};
var giveError = function (msg) {
    throw new Error(msg);
};
console.log(greet("Renata"));
console.log(greet());
doSomething("Renata", 30, true);
