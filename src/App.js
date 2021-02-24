import { useState } from "react"
import FetchRandomImages from "components/FetchRandomImages"
import Loading from "components/Loading"
import ResultGrid from "components/ResultGrid"
import Search from './components/Search'

const App = () => {
  
  const [results, setResults] = useState([])

  const handleSearchResult = data => {
    setResults(data)
  }
  
  return (
    <div className="App">
      {/* <FetchRandomImages/> */}
      <Search onSearchResult={handleSearchResult}/>
      {/* {/* <Loading data={results}/> */}
      <ResultGrid data={results}/>
    </div>
  )

}
export default App