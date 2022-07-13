import { useContext } from 'react'
import { PokemonContext } from '@contexts/PokemonContext'

import './styles.scss'

const PokemonBaseStats = () => {
  const { pokemonData } = useContext(PokemonContext)
  //console.log(pokemonData)
  return (
    <h2>Pokemon Base Stats</h2>
  )
}

export default PokemonBaseStats