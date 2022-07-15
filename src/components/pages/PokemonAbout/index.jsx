import { useEffect, useCallback, useState } from 'react'
import { getPokemonSpecies, getPokemon } from '../../../services/api'
import ErrorMessage from '@molecules/ErrorMessage'
import LoadingSpinner from '@atoms/Icons/LoadingSpinner'
import { useLocation, useParams } from 'react-router-dom'
import useFetchPokemon from '@hooks/useFetchPokemon'

import './styles.scss'

const PokemonAbout = () => {
  const [errorSpecies, setErrorSpecies] = useState(false)
  const [loadingSpecies, setLoadingSpecies] = useState(false)
  const [pokemon, setPokemon] = useState({})
  const { state } = useLocation()
  const { pokemonName } = useParams()

  const { loading, error, pokemonData } = useFetchPokemon(pokemonName, getPokemon, state)

  const fetchPokemonSpecies = useCallback(async () => {
    setLoadingSpecies(true)
    const additionalPokemonData = await getPokemonSpecies(pokemonName)

    if (additionalPokemonData) {
      const pokemonEggGroups = additionalPokemonData.egg_groups.map((eggGroup) => {
        return (
          eggGroup.name
        )
      })

      const pokemonDescription = additionalPokemonData.flavor_text_entries[6].flavor_text
      const pokemonEggCycle = additionalPokemonData.hatch_counter

      setPokemon({
        eggGroup: pokemonEggGroups,
        pokemonDescription: pokemonDescription,
        pokemonEggCycle: pokemonEggCycle
      })
    } else {
      setErrorSpecies(true)
    }

    setLoadingSpecies(false)
  }, [])

  useEffect(() => {
    fetchPokemonSpecies()
  }, [fetchPokemonSpecies])

  return (
    <>
      {error || errorSpecies && <ErrorMessage />}
      {loading || loadingSpecies && <LoadingSpinner />}
      {Object.keys(pokemonData).length > 0 && Object.keys(pokemon).length > 0 &&
        <div className='pokemonAboutSection'>
          <p className='pokemonAboutSection_description'>
            {pokemon.pokemonDescription}
          </p>

          <div className='pokemonAboutSection__sizeContainer'>
            <div className='pokemonAboutSection__size'>
              <span className='pokemonAboutSection__sizeName'>
                Height
              </span>
              <span className='pokemonAboutSection__sizeNumber'>
                {(pokemonData.height / 10).toString().padEnd(4, "0")} cm
              </span>
            </div>

            <div className='pokemonAboutSection__size'>
              <span className='pokemonAboutSection__sizeName'>
                Weight
              </span>
              <span className='pokemonAboutSection__sizeNumber'>
                {pokemonData.weight / 10} kg
              </span>
            </div>
          </div>

          <div className='pokemonAboutSection__breeding'>
            <h2 className='pokemonAboutSection__breedingTitle'>
              Breeding
            </h2>
            <div className='pokemonAboutSection__breedingItems'>
              <div className='pokemonAboutSection__breedingItem'>
                <span className='pokemonAboutSection__breedingName'>
                  Egg Groups
                </span>
                <span className='pokemonAboutSection__breedingValue'>
                  <span className='pokemonAboutSection__breedingValue--1'>{pokemon.eggGroup[0]}</span>
                  {pokemon.eggGroup[1] && <span className='pokemonAboutSection__breedingValue--2'>{pokemon.eggGroup[1]}</span>}
                </span>
              </div>
              <div className='pokemonAboutSection__breedingItem'>
                <span className='pokemonAboutSection__breedingName'>
                  Egg Cycle
                </span>
                <span className='pokemonAboutSection__breedingValue'>
                  {pokemon.pokemonEggCycle}
                </span>
              </div>

            </div>
          </div>
        </div>
      } 
    </> 
  )
}

export default PokemonAbout