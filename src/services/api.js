export const getAllPokemonBasicData = async (limit) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)

    if (!response.ok) {
      throw new Error('Request failed!')
    }

    const data = await response.json()

    return data
  } catch (e) {
    return null
  }
}

export const getTwelvePokemons = async () => {
  
  const pokemons = []

    for (var pokemonId = 1; pokemonId <= 12; pokemonId++){
      try {
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
 
    return pokemons;

}