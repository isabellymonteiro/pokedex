import { useLocation, useParams } from "react-router-dom"

const Pokemon = () => {
  const { pokemonName } = useParams()
  const location = useLocation()
  const pokemonData = location.state
  console.log(pokemonData)

  return (
    <div className='pokemonPage'>
      hi pokemon {pokemonName}!
    </div>
  )
}

export default Pokemon