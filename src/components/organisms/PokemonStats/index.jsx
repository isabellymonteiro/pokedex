import ProgressBar from '@molecules/ProgressBar'

import './styles.scss'

const PokemonStats = ({ stats }) => {
  const statsNames = ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed']

  const statsItems = stats.map((stat, index) => {
    return (
      <li key={stat.stat.name} className='pokemonStats__item'>
        <span className='pokemonStats__itemName'>{statsNames[index]}</span>
        <span className='pokemonStats__itemBaseStat'>{stat.base_stat}</span>
        <ProgressBar status={stat.base_stat} />
      </li>
    )
  })

  const statsTotal = stats.reduce(
    (acc, statsObj) => acc + statsObj.base_stat, 0
  )

  return (
    <ul className='pokemonStats'>
      {statsItems}
      <li className='pokemonStats__item'>
        <span className='pokemonStats__itemName'>Total</span>
        <span className='pokemonStats__itemBaseStat'>{statsTotal}</span>
        <ProgressBar status={statsTotal / 6}/>
      </li>
    </ul>
  )
}

export default PokemonStats