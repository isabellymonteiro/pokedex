import { useLocation, useParams } from 'react-router-dom'
import useFetchPokemon from '@hooks/useFetchPokemon'

import './styles.scss'

const PokemonBaseStats = () => {
  const { pokemonName } = useParams()
  const { state } = useLocation()
  
  const { loading, error, pokemonData } = useFetchPokemon(pokemonName, state)
  console.log(pokemonData)
  return (
    <div>
    <h2>Pokemon Base Stats</h2>
    </div>
  )
}

export default PokemonBaseStats