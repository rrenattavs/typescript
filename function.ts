const doSomething = (person: string, age: number, isMarried: boolean) => {
    console.log(`Hello ${person}`);
    console.log(`${person} is ${age}`);
    console.log(`${person} is ${isMarried}`);
}

function greet(person:string = "stranger") {
   return `Hello ${person}!`;
}

greet();

function rando(num: number){
    if(Math.random() <0.5){
        return num.toString();
    }
    return Math.random() * num;
}

const add = (num1: number, num2: number): number => num1 + num2;

const colors = ["red", "green", "blue", "yellow", "purple"];
colors.map((color) => color.toUpperCase());

function printTwice(msg:string) : void{
    console.log(msg);
    console.log(msg);

}

const neverStop = (): never => {
    while(true){
        console.log("Hello, I will never stop");
    }
}

const giveError = (msg: string) => {
    throw new Error(msg);
}

console.log(greet("Renata"));
console.log(greet());
doSomething("Renata", 30, true);