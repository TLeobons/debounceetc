import {useState} from 'react'
import styled from 'styled-components'

import useDebounce from 'hooks/useDebounce'
import useFetch from 'hooks/useFetch'

const Search = ({loading, onSearchResult}) => {

  const [term, setTerm] = useState('')

  const debounce = useDebounce()
  const fetch = useFetch()

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
    <SearchField className="Search">
      <input
        type="search"
        onChange={handleChange}
        value={term}
      />
    </SearchField>
  )
}

export default Search

const SearchField = styled.div`
  width: 80%;
  height:2rem;
`