import {useState} from 'react'
import useDebounce from 'hooks/useDebounce'
import useFetch from 'hooks/useFetch'

const URL = 'https://api.unsplash.com/search/photos'

const Search = ({onSearchResult}) => {

  const [term, setTerm] = useState('')

  const debounce = useDebounce()
  const fetch = useFetch()

  const search = async searchTerm => {
    if (!searchTerm) return
    const [data, isLoading,error] = await fetch(URL, searchTerm)
    console.log('search results', data.results, isLoading, error)
    onSearchResult(data.results)
    // console.log(data.results, isLoading, error)
  }

  const handleChange = event => {
    const searchTerm = event.target.value
    setTerm(searchTerm)
    debounce(() => search(searchTerm))
  }

  return (
    <div className="Search">
      <input
        type="search"
        onChange={handleChange}
        value={term}
        />
    </div>
  )
}

export default Search
