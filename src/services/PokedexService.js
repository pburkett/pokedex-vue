/* eslint-disable */


import {sandboxApi} from "./AxiosService"
import {AppState} from "../AppState"
import pokemonService from "./PokemonService"

class PokedexService {

  async getAll(){
    let res = await sandboxApi.get()
    AppState.pokedex = res.data
  }

  async capture(id){
    console.log(id);
    let body = AppState.loadedPokemon.find(p => p.id == id)
    console.log(body);
    let res = await sandboxApi.post('', body)
    AppState.pokedex.push(body)
    console.log(res);
    pokemonService.loadFullPokemon(3)
  }

}


const pokedexService = new PokedexService()
export default pokedexService