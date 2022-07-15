import PokemonHeader from '@organisms/PokemonHeader'

import './styles.scss'

const PokemonPageMain = ({ data }) => {

  return (
    <div className='pokemonPageMain'>
      <PokemonHeader pokemonData={data} />
      <img 
        className='pokemonPageMain__image' 
        src={data.sprites.other['official-artwork'].front_default} 
        alt={`${data.name} picture`}
      />
    </div>
  )
}

export default PokemonPageMain