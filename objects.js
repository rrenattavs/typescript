var dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has " + this.numLegs + " legs.";
    }
};
var printName = function (name) {
    console.log("".concat(name.first, " ").concat(name.last));
};
printName({ first: "Elvis", last: "Presley" });
var coordinate = {
    x: 34,
    y: 26
};
function randomCoordinate() {
    return {
        x: Math.random(),
        y: Math.random()
    };
}
var singer = {
    first: "Michael",
    last: "Jackson",
    birth: 1943,
    death: 2009,
    age: function () {
        return this.death - this.birth;
    },
    fullName: function () {
        return this.first + " " + this.last;
    },
    sayHello: function () {
        return "Hello, my name is " + this.fullName();
    }
};
printName(singer);
