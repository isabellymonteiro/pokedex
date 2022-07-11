import PokemonCard from '@molecules/PokemonCard'

import './styles.scss'

const PokedexCards = ({ data, lastCardRef }) => {
  const PokemonCards = data.map((pokemon, index) => {
    if (data.length === index + 1) {
      return (
        <PokemonCard
          ref={lastCardRef}
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          types={pokemon.types}
        />
      )
    } else {
      return (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          types={pokemon.types}
        />
      )
    }
  })

  return (
  <div className='pokedexCards__container'>
    <ul className='pokedexCards'>
      {PokemonCards}
    </ul>
  </div>
  )
}

export default PokedexCards