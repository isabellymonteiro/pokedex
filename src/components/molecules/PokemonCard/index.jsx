import { Link } from 'react-router-dom'

import './styles.scss'

const PokemonCard = ({ id, title, image, types }) => {
  
    return (
      <li className={`pokemonCard pokemonCard--${types[0]}`}>
        <Link to={title.toLowerCase()} className='pokemonCard__link'>
          <div className='pokemonCard__column pokemonCard__column--1'>
            <h2 className='pokemonCard__title'>{title}</h2>
            <div className='pokemonCard__type'>
              <span className='pokemonCard__type--1'>{types[0]}</span>
              {types[1] && <span className='pokemonCard__type--2'>{types[1]}</span>}
            </div>
          </div>
          <div className='pokemonCard__column pokemonCard__column--2'>
            <span className='pokemonCard__id'>#{id.toString().padStart(3, '0')}</span>
            <img className='pokemonCard__image' src={image} alt={`${title} picture`}></img>
          </div>
        </Link>
      </li>
    )
}

export default PokemonCard