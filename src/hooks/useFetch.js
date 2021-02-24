import {useState} from 'react'
import axios from 'axios'

import { searchURL, paramsData } from 'configs/apiData'

const useFetch = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [fetched, setFetched] = useState(null)

  const fetchData = async searchTerm => {
    try {
      setIsLoading(true)
      const {data} = await axios.get(searchURL, {
        params: {
          ...paramsData,
          query: searchTerm
        }
      })
      console.log('fetch', data)
      setIsLoading(false)
      setFetched(data.results)
    }
    catch (e) {
      setError(e)
      setIsLoading(false)
    }
    
    return [fetched, isLoading, error]
  }

  return fetchData
}

export default useFetch
