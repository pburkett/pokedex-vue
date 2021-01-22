/* eslint-disable */

import { AppState } from '../AppState.js'
import Pokemon from '../Models/Pokemon.js'
import { blankApi, pokemonApi, speciesApi } from './AxiosService.js'

class PokeApiService {
  constructor() {
    this.pokemonListRange = 149
  }

  _generateOffset() {
    return Math.ceil(Math.random() * this.pokemonListRange)
  }

  async loadFullPokemon(num) {
    AppState.loadedPokemon = []
    let fullPokemon
    for (let i = 0; i < num; i++) {
      let id = this._generateOffset()
      // let id =25
      fullPokemon = await pokemonApi.get(`pokemon/${id}/`)
      let species = await speciesApi.get(`${id}`)
      let evolution = await blankApi.get(species.data.evolution_chain.url)

      let data = fullPokemon.data
      console.log(this.traverseEvolution(evolution.data.chain, fullPokemon.data.name));
      data.nextEvolution = this.traverseEvolution(evolution.data.chain, fullPokemon.data.name)
   
      data.color = species.data.color.name
      data.flavorText = species.data.flavor_text_entries[0].flavor_text

      
      
      AppState.loadedPokemon.push(new Pokemon(data))

    }
    
  }
  traverseEvolution(chain, name){
    console.log(chain, name);
    let out = ''
    if (chain.species.name == name){
      chain.evolves_to.forEach(f => {
        let str = f.species.name
        out += str[0].toUpperCase() + str.slice(1)
        out += ', '
      })
    }
    chain.evolves_to.forEach(e => {
      if (e.species.name == name) {
        if (e.evolves_to) {
          e.evolves_to.forEach(f => {
            let str = f.species.name
            out += str[0].toUpperCase() + str.slice(1)
            out += ', '
          })
        }
      }
    })
    return out.slice(0,-2)
  }
}
const pokeApiService = new PokeApiService()
export default pokeApiService
