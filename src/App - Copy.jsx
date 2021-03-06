import React,{useEffect,useState} from "react"
//import {randomURL} from "./configs/apiData"
//import useFetch from "./hooks/useFetch"
//import Search from "./components/Search"
//import Error from "./components/Error"
//import Loading from "./components/Loading"
//import ResultGrid from "./components/ResultGrid"
//import {useGlobalStateContext} from "./context/globalContext"

/*const App = () => {

    const fetch = useFetch()

    useEffect(() => {
        fetch(randomURL)
    }, [])

    const {isLoading, fetchedImages, error } = useGlobalStateContext()
    console.log(fetchedImages)

    return <div className="App">

            <Search/>

            { error && <Error error={error}/> }

            { isLoading
             ? <Loading/>
             : <ResultGrid data={fetchedImages} />
            }
            
        </div>
}*/

const App = (props) => {
	const [text,settext] = useState('')
	const [items,setlist] = useState([])
	const makereq = ()=>({})

	return (
		<div>
			<input placeholder="Search" />
			<div id="list">
				{items.map(item=>(
					<div key={item} id="list-item">
						{item}
					</div>
				))}
			</div>
		</div>
	)
}

export default App
