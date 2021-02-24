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
    setIsLoading(isLoading)
    setError(error)
  }

  useEffect(() => {
    const [results, isLoading, error] = fetch(randomURL)
    setResults(results)
    setIsLoading(isLoading)
    setError(error)
  }, [])
  
  return (
    <div className="App">
      <Search onSearchResult={handleSearchResult}/>
      { error && <Error error={error} /> }
      { isLoading 
        ? <Loading /> 
        : <ResultGrid data={results}/>
      }
    </div>
  )

}
export default App