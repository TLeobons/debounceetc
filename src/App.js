import { useState } from "react"
import FetchRandomImages from "components/FetchRandomImages"
import Loading from "components/Loading"
import ResultGrid from "components/ResultGrid"
import Search from './components/Search'

const App = () => {
  
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearchResult = (results, isLoading, error) => {
    setResults(results)
    setIsLoading(isLoading)
    setError(error)
  }
  
  return (
    <div className="App">
      {/* <FetchRandomImages/> */}
      <Search onSearchResult={handleSearchResult}/>
      { isLoading && <Loading /> }
      { error && <Error/> }
      <ResultGrid data={results}/>
    </div>
  )

}
export default App