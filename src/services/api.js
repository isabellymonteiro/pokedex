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