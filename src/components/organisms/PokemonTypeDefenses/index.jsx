import { useState, useEffect, useCallback } from 'react'
import { getPokemonTypes } from '@services/api'
import ErrorMessage from '@molecules/ErrorMessage'
import LoadingSpinner from '@atoms/Icons/LoadingSpinner'
import TypeDefensesList from '@organisms/TypeDefensesLists'

import './styles.scss'

const PokemonTypeDefenses = ({ types }) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pokemonTypes, setPokemonTypes] = useState()

  const typeNames = [
    'Double damage from:', 'Double damage to:',
    'Half damage from:', 'Half damage to:',
    'No damage from:', 'No damage to:'
  ]

  const typeData = types.map((item) => item.type.name)

  const fetchTypeDefenses = useCallback(async () => {
    setLoading(true)
    const typeDefenses = await getPokemonTypes(typeData)
    
    if (typeDefenses) {
      setPokemonTypes(typeDefenses)
    } else {
      setError(true)
    }
    setLoading(false)
  }, [])
  
  useEffect(() => {
    fetchTypeDefenses()
  }, [fetchTypeDefenses])

  return (
    <div className='pokemonTypeDefenses'>
      <h2 className='pokemonTypeDefenses__title'>Type defenses</h2>
      <p className='pokemonTypeDefenses__subtitle'>The effectiveness of each type on Charmander.</p>
      {error && <ErrorMessage />}
      {loading && <LoadingSpinner />}
      {pokemonTypes && !loading && <TypeDefensesList lists={pokemonTypes} />
      }
    </div>
  )
}

export default PokemonTypeDefenses

