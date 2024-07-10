function f(
    a: number,
    b: string,
    c?: string
): string {
    const result = b;
    return result;
}

type person = {
    name: string,
    age: number,
    region?: string
}
const minsu: person = {
    name: "minsu",
    age: 22,
    region: "seoul"
}

fetch("https://swapi.dev/api/people/1")
    .then((response) => response.json())
    .then((data: unknown) => {
        if (isCharacter(data)) {
            console.log(data.name);
        }
    });
function isCharacter(character: any): character is { name: string } {
    return "name" in character;
}

type func = (props: number) => void;

class Product {
    constructor(public name: string, public price: number) {
        this.name = name;
        this.price = price;
    }
}

enum Level {
    Low,
    Medium,
    High
}

let level = Level.Low;
console.log(level);
level = 1;
console.log(level);

enum Lev {
    Low = "L",
    Medium = "M",
    High = "H"
}
let lev = Lev.Low;
lev = "L";

type RGB = "red" | "green" | "blue";
let color: RGB = "red";
color = "yellow";