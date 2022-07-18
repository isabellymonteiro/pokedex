import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const PokemonCard = ({ pokemonData }, ref) => {
    return (
      <li ref={ref} className={`pokemonCard pokemonCard--${pokemonData.types[0].type.name}`}>
        <Link
          to={`${pokemonData.name}/about`}
          state={pokemonData} 
          className='pokemonCard__link'>
          <div className='pokemonCard__column pokemonCard__column--1'>
            <h2 className='pokemonCard__name'>{pokemonData.name}</h2>
            <div className='pokemonCard__type'>
              <span className='pokemonCard__type--1'>{pokemonData.types[0].type.name}</span>
              {pokemonData.types[1] && <span className='pokemonCard__type--2'>{pokemonData.types[1].type.name}</span>}
            </div>
          </div>
          <div className='pokemonCard__column pokemonCard__column--2'>
            <span className='pokemonCard__id'>#{pokemonData.id.toString().padStart(3, '0')}</span>
            <img className='pokemonCard__image' src={pokemonData.sprites.front_default} alt={`${pokemonData.name} picture`}></img>
          </div>
        </Link>
      </li>
    )
}

export default forwardRef(PokemonCard)