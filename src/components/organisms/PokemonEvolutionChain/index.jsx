import pokemonIds from '@staticData/pokemonIds.json'
import Arrow from '@atoms/Icons/Arrow'

import './styles.scss'

const PokemonEvolutionChain = ({ data }) => {
  const initialPokemon = data.chain.species.name
  const firstWave = []
  const secondWave = []
  const thirdWave = []

  for (let evolution = 0; evolution < data.chain.evolves_to.length; evolution++) {
    firstWave.push(data.chain.evolves_to[evolution].species.name)
    for (let evolutionTwo = 0; evolutionTwo < data.chain.evolves_to[evolution].evolves_to.length; evolutionTwo++) {
      secondWave.push(data.chain.evolves_to[evolution].evolves_to[evolutionTwo].species.name)
      for (let evolutionThree = 0; evolutionThree < data.chain.evolves_to[evolution].evolves_to[evolutionTwo].evolves_to.length; evolutionThree++) {
        thirdWave.push(data.chain.evolves_to[evolution].evolves_to[evolutionTwo].evolves_to[evolutionThree].species.name)
      }
    }
  }

  const firstEvolution = firstWave.map((firstWavePokemon) => {
    return (
      <li className='pokemonEvolutionChain__itemContainer' key={initialPokemon + firstWavePokemon}>
        <div className='pokemonEvolutionChain__item'>
          <img
            className='pokemonEvolutionChain__image'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIds[initialPokemon]}.png`}
            alt={`${initialPokemon}`}
          ></img>
          <span className='pokemonEvolutionChain__name'>{initialPokemon}</span>
        </div> 
        <Arrow color='#DADADA' invert />
        <div className='pokemonEvolutionChain__item'>
          <img 
            className='pokemonEvolutionChain__image' 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIds[firstWavePokemon]}.png`}
            alt={`${firstWavePokemon}`}
          ></img>
          <span className='pokemonEvolutionChain__name'>{firstWavePokemon}</span>
        </div>
      </li>
    )
  })

  const secondEvolution = secondWave.map((secondWavePokemon) => {
    return (
      firstWave.map((firstWavePokemon) => {
        return (
          <li className='pokemonEvolutionChain__itemContainer' key={firstWavePokemon + secondWavePokemon}>
            <div className='pokemonEvolutionChain__item'>
              <img 
                className='pokemonEvolutionChain__image'
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIds[firstWavePokemon]}.png`}
                alt={`${firstWavePokemon}`}
              ></img>
              <span className='pokemonEvolutionChain__name'>{firstWavePokemon}</span>
            </div> 
            <Arrow color='#DADADA' invert />
            <div className='pokemonEvolutionChain__item'>
              <img
                className='pokemonEvolutionChain__image'
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIds[secondWavePokemon]}.png`}
                alt={`${secondWavePokemon}`}
              ></img>
            <span className='pokemonEvolutionChain__name'>{secondWavePokemon}</span>
          </div>
        </li>
        )
      })  
    )
  })

  const thirdEvolution = thirdWave.map((thirdWavePokemon) => {
    return (
      secondWave.map((secondWavePokemon) => {
        return (
          <li  className='pokemonEvolutionChain__itemContainer' key={secondWavePokemon + thirdWavePokemon}>
            <div className='pokemonEvolutionChain__item'>
              <img
                className='pokemonEvolutionChain__image'
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIds[secondWavePokemon]}.png`}
                alt={`${secondWavePokemon}`}
              ></img>
              <span className='pokemonEvolutionChain__name'>{secondWavePokemon}</span>
            </div> 
            <Arrow color='#DADADA' invert />
            <div className='pokemonEvolutionChain__item'>
              <img
                className='pokemonEvolutionChain__image'
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIds[thirdWavePokemon]}.png`}
                alt={`${thirdWavePokemon}`}
              ></img>
            <span className='pokemonEvolutionChain__name'>{thirdWavePokemon}</span>
          </div>
          </li>
        )
      })  
    )
  })

  return (
    <div className='pokemonEvolutionChain__container'>
      <h1 className='pokemonEvolutionChain__title'>Evolution Chain</h1>
      <ul className='pokemonEvolutionChain'>
        {firstEvolution}
        {secondEvolution}
        {thirdEvolution}
      </ul>
    </div>
  )
}

export default PokemonEvolutionChain