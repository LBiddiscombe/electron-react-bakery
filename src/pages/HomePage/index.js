import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Wrapper>
      <h1>
        <Link to={`/0`}>Start Here</Link>
      </h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
`

export default HomePage
