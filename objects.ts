const dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs() {
        return "This dog has " + this.numLegs + " legs."
    }
}

const printName = (name: { first: string, last: string }): void => {
    console.log(`${name.first} ${name.last}`);
}

printName({first: "Elvis", last: "Presley"})

let coordinate: { x: number; y: number } = {
    x: 34,
    y: 26
}
function randomCoordinate(): { x: number, y: number } {
    return {
        x: Math.random(),
        y: Math.random()
    }
}

const singer = {
    first: "Michael",
    last: "Jackson",
    birth: 1943,
    death: 2009,
    age: function () {
        return this.death - this.birth
    },
    fullName: function () {
        return this.first + " " + this.last
    },
    sayHello: function () {
        return "Hello, my name is " + this.fullName()
    }
}
printName(singer);

function doublePoints(point: { x: number, y: number }): { x: number, y: number } {
    return {
        x: point.x * 2,
        y: point.y * 2
    }
}

//instead of repeating this, we can use aliases
//not creating a new type, but aliasing an existing type, give a name to an existing type
type Point = { 
    x: number,
    y: number
};

let coordinateWithAlias: Point = {
    x: 34,
    y: 26
}

function doublePointsWithAlias(point: Point): Point {
    return {
        x: point.x * 2,
        y: point.y * 2
    }
}

type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits: {
        producer: string,
        writer: string
    }
}

const song: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 356789,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}

const calculatePayout = (song: Song): number => {
    return song.numStreams * .0033
}

const songPayout: number = calculatePayout(song)

const printSong = (song: Song): void => {
    console.log(`${song.title} - ${song.artist}`)
}

printSong(song)

type Points = {
    x: number,
    y: number, 
    z?: number
}

const myPoints: Points = {
    x: 1,
    y: 8,
    z: 9
}

type user = {
    readonly id: number,
    username: string
};

const user: user = {
    id: 123,
    username: "spongebob"
}

console.log(user.id)

type Circle = {
    radius: number
}

type Colorful = {
    color: string
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
}