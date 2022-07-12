import { Link, Outlet, useLocation, useParams } from "react-router-dom"

const Pokemon = () => {
  const { pokemonName } = useParams()

  return (
    <div className='pokemonPage'>
      hi pokemon {pokemonName}!
      <div className='pokemonPage__subpages'>
        <ul>
          <li><Link to='about'>About</Link></li>
          <li><Link to='base-stats'>Base Stats</Link></li>
          <li><Link to='evolution'>Evolution</Link></li>
          <li><Link to='moves'>Moves</Link></li>
        </ul>
        <Outlet />
      </div>
    </div>
  )
}

export default Pokemon