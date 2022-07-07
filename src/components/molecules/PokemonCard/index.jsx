import { Link } from 'react-router-dom'

import './styles.scss'

const PokemonCard = ({ id, title, image, types }) => {
  
    return (
      <li className='pokemonCard__container'>
        <Link to={title.toLowerCase()} className='pokemonCard'>
          <div className='pokemonCard__firstColumn'>
            <h2 className='pokemonCard__title'>{title}</h2>
            <span className='pokemonCard__type--one'>{types[0]}</span>
            {types[1] && <span className='pokemonCard__type--two'>{types[1]}</span>}
          </div>
          <div className='pokemonCard__secondColumn'>
            <span className='pokemonCard__id'>{id}</span>
            <img className='pokemonCard__image' src={image} alt={`${title} picture`}></img>
          </div>
        </Link>
      </li>
    )
}

export default PokemonCard