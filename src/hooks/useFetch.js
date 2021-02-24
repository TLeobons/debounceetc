import {useState} from 'react'
import axios from 'axios'
import { paramsData } from 'configs/apiData'

const useFetch = () => {

  const fetchData = async (URL, searchTerm) => {
    let isLoading = false
    let error = null
    let data = null
    try {
      isLoading = true
      const result = await axios.get(URL, {
        params: {
          ...paramsData,
          query: searchTerm
        }
      })
      console.log('fetch', result.data);
      isLoading = false
      data = result.data
    }
    catch (e) {
      error = new Error(e)
      isLoading = false
    }
    
    return [data, isLoading, error]
  }

  return fetchData
}

export default useFetch
