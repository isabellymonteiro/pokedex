import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchPokemon from '@hooks/useFetchPokemon'
import ErrorMessage from '@molecules/ErrorMessage'
import LoadingSpinner from '@atoms/Icons/LoadingSpinner'
import PokemonEvolutionChain from '@organisms/PokemonEvolutionChain'
import { getPokemonSpecies, getPokemonEvolution } from '@services/api'

import './styles.scss'

const PokemonEvolution = () => {
  const [errorEvolution, setErrorEvolution] = useState(false)
  const [loadingEvolution, setLoadingEvolution] = useState(false)
  const [pokemonEvolution, setPokemonEvolution] = useState({})

  const { pokemonName } = useParams()

  const { loading, error, pokemonData } = useFetchPokemon(pokemonName, getPokemonSpecies)
 
  const getEvolutionData = async (evolutionUrl) => {
    setLoadingEvolution(true)

    const evolutionData = await getPokemonEvolution(evolutionUrl)

    if (evolutionData) {
      setPokemonEvolution(evolutionData)
    } else {
      setErrorEvolution(true)
    }
    setLoadingEvolution(false)
  }

  useEffect(() => {
    if (Object.keys(pokemonData).length > 0) {
      getEvolutionData(pokemonData.evolution_chain.url)
    }
  }, [pokemonData])
  
  return (
    <>
      {error || errorEvolution && <ErrorMessage />}
      {loading || loadingEvolution && <LoadingSpinner />}
      {Object.keys(pokemonEvolution).length > 0 &&
        <PokemonEvolutionChain data={pokemonEvolution} />} 
    </>
  )
}

export default PokemonEvolution