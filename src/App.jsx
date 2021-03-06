import React,{useEffect,useState} from "react"
import Lodash from 'lodash'

//This represent the values to be sent back by your api request
const data = ["Genesis","Exodus","John","Jude","Jonah","Reverend","Revelation"]

const App = (props) => {
	const [text,settext] = useState('')
	const [items,setlist] = useState([])

	//This is pseudo function, that wraps your Fetch/Axios API
	const makereq =e=>{
		let val =e.target.value
		//Were the Fetch/Axios API is meant to live in
		let filtered = data.filter(item=>item.toLowerCase().indexOf(val.toLowerCase())>=0 && item!='')
		setlist(filtered)
	}

	//The actually the Real Lodash code
	let lodashed = Lodash.debounce(makereq,500)
	
	return (
		<div>
			<input placeholder="Search" onChange={lodashed} />
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
