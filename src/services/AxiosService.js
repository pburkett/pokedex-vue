/* eslint-disable */

import axios from 'axios'

// const baseURL = window.location.origin.includes('localhost') ? 'http://localhost:8080' : ''
const baseURL = 'https://bcw-sandbox.herokuapp.com/'
export const api = axios.create({
  baseURL,
  timeout: 8000
})

export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  api.defaults.headers.authorization = ''
}

export const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 3000
})

export const speciesApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon-species/',
  timeout: 3000
})

export const blankApi = axios.create({
  baseURL: '',
  timeout: 3000
})

export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/parkertim/pokemon',
  timeout: 3000
})

