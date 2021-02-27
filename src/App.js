import {useState, useEffect} from "react"
import {randomURL} from "./configs/apiData"
import useFetch from "./hooks/useFetch"

const App = () => {
    const fetch = useFetch()
    useEffect(() => {
        fetch(randomURL)
    },[])

    return (
      <div className="App">
      </div>
    )

}
export default App
