import React from 'react'
import styled from 'styled-components'
import {useGlobalDispatchContext} from "../context/globalContext"

const ResultGrid = ({data}) => {
  return (
    <div >
      {console.log(data)}
      {data&&data.map(item => (
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

const Image = styled.img`
  max-width: 600px;
  max-height: 600px;
`
