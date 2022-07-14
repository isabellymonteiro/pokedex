import PokemonStats from '@organisms/PokemonStats'
import PokemonTypeDefenses from '@organisms/PokemonTypeDefenses'
import { useLocation, useParams } from 'react-router-dom'
import useFetchPokemon from '@hooks/useFetchPokemon'

import './styles.scss'

const PokemonBaseStats = () => {
  const { state } = useLocation()
  const { pokemonName } = useParams()

  const { loading, error, pokemonData } = useFetchPokemon(pokemonName, state)
  
  return (
    <div className='pokemonBaseStats'>
      {Object.keys(pokemonData).length > 0 &&
        <>
          <PokemonStats stats={pokemonData.stats} />
          <PokemonTypeDefenses types={pokemonData.types} />
        </>
      } 
    </div>
  )
}

export default PokemonBaseStats