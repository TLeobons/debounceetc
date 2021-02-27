import {useState} from 'react'
import axios from 'axios'

import { searchURL, paramsData } from 'configs/apiData'
import {useGlobalDispatchContext} from "../context/globalContext"

const useFetch = () => {

  //should I create state here or use variables inside the fetchData function?
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [fetched, setFetched] = useState(null)

  const dispatch = useGlobalDispatchContext();
  const fetchData = async searchTerm => {
    try {
      dispatch({type:'IMAGE_LOADING'})
      const {data} = await axios.get(searchURL, {
        params: {
          ...paramsData,
          query: searchTerm
        }
      })
      dispatch({type:'IMAGE_LOADED',loadedImages:data.results})
    }
    catch (e) {
      setError(e)
      setIsLoading(false)
    }
    return [fetched, isLoading]
  }

  return fetchData
}

export default useFetch
