//not being used
import { useState } from 'react'

const useFetch = (requestUrl, applyData) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendGetRequest = async (applyDataParameter = null) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(requestUrl)

      if (!response.ok) {
        throw new Error('Request failed!')
      }

      const data = await response.json()
      applyData(data, applyDataParameter)
    } catch(err) {
      setError(err.message || 'Something went wrong!')
    }
    setIsLoading(false)
  }

  return {
    isLoading,
    error,
    sendGetRequest
  }
}

export default useFetch

// Para chamar no componente ex.:
 // const { isLoading, error, sendGetRequest: fetchPokemons } = useFetch(
  //   `https://pokeapi.co/api/v2/pokemon/?limit=${POKEMONS_LIMIT}`,
  //   filterPokemons
  // )