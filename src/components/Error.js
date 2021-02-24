import React from 'react'
import styled from 'styled-components'

const Error = ({error}) => {
  return (
      <Message>
        There was an error with the request
        {/* {error.status}
        {error.message} */}
      </Message>
  )
}

export default Error

const Message = styled.div`
  color: red;
  font-size: 2rem;
`