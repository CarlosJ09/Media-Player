let num:number = 9;
let saludo:string = "Hola";

const suma = () =>{
    return num + 11
}

const sumar = suma();
console.log(sumar);

let people: Array<string | number> = []
people = ["Carlos", "Raul", "Alberto"];

people.push("David");
console.log(people);

//Funciones

function add(a:number,b:number) {
    return a + b
}

//Interfaces
enum Color {
    Rojo = "Rojo",
    Verde = "Verde"
}

interface Rectangulo {
    ancho: number
    alto:number
    color?:Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo,
}

function area(r:Rectangulo) {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}
console.log(rect.toString());