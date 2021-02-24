import React from 'react'
import { useEffect } from 'react'
import useFetch from 'hooks/useFetch'

const FetchRandomImages = () => {

  const URL = 'https://api.unsplash.com/photos/random'

  const fetchRandom = useFetch(URL)

  useEffect(() => {
    fetchRandom()
  }, [])  

}

export default FetchRandomImages
