import { useState, useCallback, useEffect } from 'react'

const useFetchPokemon = (pokemonParam, getFunction, state = false) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [pokemonData, setPokemonData] = useState({})
  
  const fetchFunction = useCallback(async () => {
    setLoading(true)
    const pokemon = await getFunction(pokemonParam)
    
    if (pokemon) {
      setPokemonData(pokemon)
    } else {
      setError(true)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (state) {
      setPokemonData(state)
    } else {
      fetchFunction()
    }
  }, [fetchFunction])
  
  return {
    loading,
    error,
    pokemonData
  }
}

export default useFetchPokemon