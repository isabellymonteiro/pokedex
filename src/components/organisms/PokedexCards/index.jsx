import PokemonCard from '@molecules/PokemonCard'

import './styles.scss'

const PokedexCards = ({ data }) => {
  const PokemonCards = data.pokemonMockData.map((pokemonData) => {
    return (
      <PokemonCard
        key={pokemonData.id}
        id={pokemonData.id}
        title={pokemonData.title}
        image={pokemonData.image}
        types={pokemonData.types}
      />
    )
  })

  return (
    <div className='pokedexCards'>
      {PokemonCards}
    </div>
  )
}

export default PokedexCards