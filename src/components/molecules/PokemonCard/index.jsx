import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const PokemonCard = ({ id, name, image, types }, ref) => {
    return (
      <li ref={ref} className={`pokemonCard pokemonCard--${types[0].type.name}`}>
        <Link to={name.toLowerCase()} className='pokemonCard__link'>
          <div className='pokemonCard__column pokemonCard__column--1'>
            <h2 className='pokemonCard__name'>{name}</h2>
            <div className='pokemonCard__type'>
              <span className='pokemonCard__type--1'>{types[0].type.name}</span>
              {types[1] && <span className='pokemonCard__type--2'>{types[1].type.name}</span>}
            </div>
          </div>
          <div className='pokemonCard__column pokemonCard__column--2'>
            <span className='pokemonCard__id'>#{id.toString().padStart(3, '0')}</span>
            <img className='pokemonCard__image' src={image} alt={`${name} picture`}></img>
          </div>
        </Link>
      </li>
    )
}

export default forwardRef(PokemonCard)