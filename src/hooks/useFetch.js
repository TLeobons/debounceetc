import {useState} from 'react'
import axios from 'axios'

import { searchURL, paramsData } from 'configs/apiData'
import {useGlobalDispatchContext} from "../context/globalContext"

const useFetch = () => {

  const dispatch = useGlobalDispatchContext()
  
  const fetchData = async searchTerm => {
    let results
    try {
      dispatch({type:'IMAGE_LOADING'})
      const {data} = await axios.get(searchURL, {
        params: {
          ...paramsData,
          query: searchTerm
        }
      })
      results = data.results
      if (length === 0) dispatch({type:'ERROR_LOADING', error: 'no images found'})

      dispatch({type:'IMAGE_LOADED',loadedImages: results})
    }
    catch (e) {
      dispatch({type:'ERROR_LOADING',error: e})
    }
  }

  return fetchData
}

export default useFetch
