import PokemonStats from '@organisms/PokemonStats'
import PokemonTypeDefenses from '@organisms/PokemonTypeDefenses'
import { useLocation, useParams } from 'react-router-dom'
import useFetchPokemon from '@hooks/useFetchPokemon'
import ErrorMessage from '@molecules/ErrorMessage'
import LoadingSpinner from '@atoms/Icons/LoadingSpinner'
import { getPokemon } from '@services/api'

import './styles.scss'

const PokemonBaseStats = () => {
  const { state } = useLocation()
  const { pokemonName } = useParams()

  const { loading, error, pokemonData } = useFetchPokemon(pokemonName, getPokemon, state)
  
  return (
  <>
    {error && <ErrorMessage />}
    {loading && <LoadingSpinner />}
    {Object.keys(pokemonData).length > 0 && !error && !loading &&
      <div className='pokemonBaseStats'>
        <PokemonStats stats={pokemonData.stats} />
        <PokemonTypeDefenses types={pokemonData.types} />
      </div>
    }
  </>
  )
}

export default PokemonBaseStats