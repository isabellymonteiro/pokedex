import PokemonStats from '@organisms/PokemonStats'
import PokemonTypeDefenses from '@organisms/PokemonTypeDefenses'
import { useLocation, useParams } from 'react-router-dom'

import './styles.scss'

const PokemonBaseStats = () => {
  const { state } = useLocation()
  const { pokemonName } = useParams()
  
  return (
    <div className='pokemonBaseStats'>
      {state &&
        <>
          <PokemonStats stats={state.stats} />
          <PokemonTypeDefenses types={state.types} />
        </>
      } 
    </div>
  )
}

export default PokemonBaseStats