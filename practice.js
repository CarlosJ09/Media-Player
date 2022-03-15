//THIS
const zelda = {
    name: 'Zelda',
    hp: 10
}

zelda.saludar = function() {
    console.log(`Hola soy ${this.name}`)
}

zelda.saludar();

//GENERATORS

function* idMaker() {
    let id = 1
    while(true){
        yield id
        id++
    }
}

function* idMakerWithReset() {
    let id = 1
    let reset;
    while(true){
        reset = yield id
        if(reset){
            id = 1;
        }else{
            id++
        }
    }
}

const gen = idMaker();
console.log(gen.next());
//Haciendo Reset
const genWithReset = idMakerWithReset();
console.log(genWithReset.next(true));

//Fetch