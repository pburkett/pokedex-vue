/* eslint-disable */

export default class Pokemon {
    constructor({name, img, sprites, id, types, color, flavorText, nextEvolution}) {
    this.name = name
    this.img = img || sprites.other['official-artwork']['front_default']
    this.id = id 
    this.types = types
    
    this.color = color
    this.flavorText = flavorText
    this.nextEvolution = nextEvolution || '' 
    console.log(this.color);
}
pokedexTemplate(){
    return `
                <div class="">
                    <button onclick="app.pokedexController.viewPokemon('${this.id}')" class="bg-success pokedex-img d-flex justify-content-center align-items-end" style="background-image: url(${this.img});"></button>
                </div>
    `
}
displayTemplate(){
    return `
                <div class="display-img bg-success d-flex justify-content-center align-items-end" style="background-image: url(${this.img});">
                    <h5 class="text-center"></h3>
                </div>
                <h5 class="text-center my-4 text-capitalize">${this.name}</h3>
                <p class="text-center my-4">Types: ${this.displayTypes()}</p>
            `
}
}
