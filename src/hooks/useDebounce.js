import { useState } from 'react'

const useDebounce = () => {

  const DEBOUNCE_DELAY = 1000

  const [typingTimeout, setTypingTimeout] = useState('')

  const debounce = (func, delay = DEBOUNCE_DELAY) => {
    clearTimeout(typingTimeout)
    const timeout = setTimeout(() => func(), delay)
    setTypingTimeout(timeout)      
  }

  return debounce
}

export default useDebounce