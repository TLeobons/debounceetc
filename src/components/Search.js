import {useState} from 'react'
import useDebounce from 'hooks/useDebounce'
import useFetch from 'hooks/useFetch'

const Search = ({onSearchResult}) => {

  const [term, setTerm] = useState('')

  const debounce = useDebounce()
  const fetch = useFetch()

  const loading = (isLoading) =>{
    setIsLoading(isLoading)
  }

  const search = async searchTerm => {
    if (!searchTerm) return
    loading(true)
    const [fetched, isLoading, error] = await fetch(searchTerm)
    onSearchResult(fetched, isLoading, error)
    loading(false)
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
