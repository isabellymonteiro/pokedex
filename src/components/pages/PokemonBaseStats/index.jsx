import { useContext } from 'react'
import { PokemonContext } from '@contexts/PokemonContext'
import ProgressBar from '@molecules/ProgressBar'

import './styles.scss'

const PokemonBaseStats = () => {
  const { pokemonData } = useContext(PokemonContext)

  const pokemonStatusBars = pokemonData.stats.map((stat) =>
    <li key={stat.stat.name}>
      <span>{stat.stat.name}</span>
      <ProgressBar status={stat.base_stat} />
      <span>Total</span>
      <ProgressBar status={stat.base_stat} />
    </li>
  )
  
  return (
    <div className='pokemonBaseStats'>
      <div className='pokemonBaseStats__stats'>
        {pokemonStatusBars}
      </div>
    </div>
  )
}

export default PokemonBaseStats