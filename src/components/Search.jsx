import {useState} from 'react'
import useDebounce from 'hooks/useDebounce'
import useFetch from 'hooks/useFetch'

const Search = () => {

  const [term, setTerm] = useState('')

  const debounce = useDebounce()
  const fetch = useFetch()

  const search = async searchTerm => {
    if (!searchTerm) return
    await fetch(searchTerm)
  }

  const handleChange = event => {
    const searchTerm = event.target.value
    setTerm(searchTerm)
    debounce(() => search(searchTerm))
  }

  return <div className="Search">

      <label for='search'/>
      <input
        id='search'
        type="search"
        onChange={handleChange}
        value={term}
      />
      \
    </div>
}

export default Search
