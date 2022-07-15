import { useEffect, useCallback, useContext, useState } from 'react'
import { getPokemonAbout } from '../../../services/api'
import ErrorMessage from '@molecules/ErrorMessage'
import LoadingSpinner from '@atoms/Icons/LoadingSpinner'
import { useLocation, useParams } from 'react-router-dom'



import './styles.scss'



const PokemonAbout = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState({})
  const {state} = useLocation()
  const {pokemonName} = useParams()

  console.log(state)

  const fetchPokemon = useCallback(async () => {
    setLoading(true)
    const additionalPokemonData = await getPokemonAbout(pokemonName)


    console.log(additionalPokemonData)

    if (additionalPokemonData) {

      const pokemonEggGroups = additionalPokemonData.egg_groups.map((eggGroup) => {
        return (
          eggGroup.name
        )
      })


      const pokemonDescription = additionalPokemonData.flavor_text_entries[6].flavor_text

      const pokemonEggCycle = additionalPokemonData.hatch_counter


      setPokemon({eggGroup: pokemonEggGroups, 
        pokemonDescription: pokemonDescription, 
        pokemonEggCycle: pokemonEggCycle
        })
    } else {
      setError(true)
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    fetchPokemon()
  }, [fetchPokemon])

  return (
    <div className='pokemonAboutSection'>
        {error && <ErrorMessage />}
        {loading && <LoadingSpinner />}
        {!loading && state && Object.keys(pokemon).length > 0 &&
        <>
          <p className='pokemonAboutSection_description'>
            {pokemon.pokemonDescription}           
          </p>
          <span className='pokemonAboutSection_size'>
            Height {state.height} cm
            Weight {state.weight} kg
          </span>
    
        </>
      }
    </div>
    
  )
}

export default PokemonAbout