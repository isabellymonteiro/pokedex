import { useEffect, useCallback, useContext, useState } from 'react'
import { getPokemonAbout } from '../../../services/api'
import ErrorMessage from '@molecules/ErrorMessage'
import LoadingSpinner from '@atoms/Icons/LoadingSpinner'



import './styles.scss'


const PokemonAbout = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState([])
  const {pokemonData} = useContext(PokemonContext)
  
  const fetchPokemon = useCallback(async () => {
    setLoading(true)
    const additionalPokemonData = await getPokemonAbout(pokemonData.name)

    if (additionalPokemonData) {
      setPokemon(additionalPokemonData)
    } else {
      setError(true)
    }
    console.log(additionalPokemonData);
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchPokemon()
  }, [fetchPokemon])
  return (
    <div>
        {error && <ErrorMessage />}
        {loading && <LoadingSpinner />}
        {!!pokemon.length && pokemonData && !loading &&
        <>
          
        </>
      }
    </div>
    
  )
}

export default PokemonAbout