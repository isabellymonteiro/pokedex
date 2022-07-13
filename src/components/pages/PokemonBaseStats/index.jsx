import ProgressBar from '@molecules/ProgressBar'
import { useLocation, useParams } from 'react-router-dom'
import useFetchPokemon from '@hooks/useFetchPokemon'

import './styles.scss'

const PokemonBaseStats = () => {
  const { pokemonName } = useParams()
  const { state } = useLocation()

  const { loading, error, pokemonData } = useFetchPokemon(pokemonName, state)
  console.log(pokemonData)

  // const pokemonStatusBars = pokemonData.stats.map((stat) => {
  //   return (
  //     <li key={stat.stat.name}>
  //       <ProgressBar status={stat.base_stat} />
  //     </li>
  //   )
  // })

  return (
    <h1>test</h1>
  // <div className='pokemonBaseStats'>
  //   <div className='pokemonBaseStats__stats'>
  //     {pokemonStatusBars}
  //   </div>
  // </div>
  )
}

export default PokemonBaseStats