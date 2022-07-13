//not being used
import { useState, useCallback, useEffect } from 'react'
import { getPokemon } from '@services/api'

const useFetchPokemon = (pokemonName, state) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [pokemonData, setPokemonData] = useState([])
  
  const fetchPokemon = useCallback(async () => {
    setLoading(true)
    const pokemon = await getPokemon(pokemonName.toLowerCase())
    
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
    fetchPokemon()
    }
  }, [])

  return {
    loading,
    error,
    pokemonData
  }
}

export default useFetchPokemon