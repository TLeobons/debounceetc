import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  max-width: 600px;
  max-height: 600px;
`

const ResultGrid = ({data}) => {
  return (
    <div>
        {data?.map(item => (
          <Image
            key={item.id}
            src={item.urls.regular}
            alt={item.alt_description}
            />
        ))}     
    </div>
  )
}

export default ResultGrid
