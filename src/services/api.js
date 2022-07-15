import { MAX_POKEMONS } from '@pages/Pokedex'

export const getAllPokemonBasicData = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${MAX_POKEMONS}`)
    if (!response.ok) {
      throw new Error('Request failed!')
    }
    const data = await response.json()
    return data
  } catch (e) {
    return null
  }
}


export const getTwentyPokemons = async (initialId) => {
  const pokemons = []

  for (let pokemonId = initialId; pokemonId <= (initialId + 19); pokemonId++){
    try {
      if (pokemonId > MAX_POKEMONS) break
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      if (!response.ok) {
        throw new Error('Request failed!')
      }
      const data = await response.json()
      pokemons.push(data)
    } catch(e) {
      return null
    }
  }
  return pokemons
}


export const getFilteredPokemons = async (pokemonUrls) => {
  const filteredPokemons = []

  for (let pokemonUrl = 0; pokemonUrl < pokemonUrls.length; pokemonUrl++){
    try {
      const response = await fetch(`${pokemonUrls[pokemonUrl]}`)
      if (!response.ok) {
        throw new Error('Request failed!')
      }
      const data = await response.json()
      filteredPokemons.push(data)
    } catch(e) {
      return null
    }
  }
  return filteredPokemons
}


export const getPokemon = async (pokemonName) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    if (!response.ok) {
      throw new Error('Request failed!')
    }
    const data = await response.json()
    return data
  } catch (e) {
    return null
  }
}


export const getPokemonAbout = async (pokemonName) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
    if (!response.ok) {
      throw new Error('Request failed!')
    }
    const data = await response.json()
    return data
  } catch (e) {
    return null
  }
}


export const getPokemonTypes = async (types) => {
  const typeDefensesData = []

  for (let type = 0; type < types.length; type++) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${types[type]}`)
      if (!response.ok) {
        throw new Error('Request failed!')
      }
      const data = await response.json()
      typeDefensesData.push(data)
    } catch (e) {
      return null
    }
  }
  return typeDefensesData
}


export const getPokemonSpecies = async (pokemonName) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
    if (!response.ok) {
      throw new Error('Request failed!')
    }
    const data = await response.json()
    return data
  } catch (e) {
    return null
  }
}


export const getPokemonEvolution = async (evolutionUrl) => {
  try {
    const response = await fetch(`${evolutionUrl}`)
    if (!response.ok) {
      throw new Error('Request failed!')
    }
    const data = await response.json()
    return data
  } catch (e) {
    return null
  }
}