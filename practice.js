const zelda = {
    name: 'Zelda',
    hp: 10
}

zelda.saludar = function() {
    console.log(`Hola soy ${this.name}`)
}

zelda.saludar();
