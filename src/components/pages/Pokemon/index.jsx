import { useParams } from "react-router-dom"

const Pokemon = () => {
  const { pokemonName } = useParams()

  return (
    <div className='pokemonPage'>
      hi pokemon {pokemonName}!
    </div>
  )
}

export default Pokemon