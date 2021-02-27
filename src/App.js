import { useState, useEffect } from "react"

import Error from 'components/Error'
import Loading from 'components/Loading'
import ResultGrid from 'components/ResultGrid'
import Search from 'components/Search'
import useFetch from 'hooks/useFetch'
import {randomURL} from 'configs/apiData'

const App = () => {

  const fetch = useFetch()

  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearchResult = (results, isLoading, error) => {
    setResults(results)
    setError(error)
  }

  const loading = (isLoading) =>{
    setIsLoading(isLoading)
  }

  useEffect(() => {
    fetch(randomURL)  
  }, [])

  return (
    <div className="App">
      <Search loading={loading} onSearchResult={handleSearchResult}/>
      { error && <Error error={error} /> }
      { isLoading
        ? <Loading />
        : <ResultGrid data={results}/>
      }
    </div>
  )

}
export default App
