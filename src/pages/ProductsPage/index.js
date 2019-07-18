import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../../components/Navbar'
import ProductGrid from '../ProductsPage/ProductGrid'

const ProductsPage = ({ match }) => {
  return (
    <Wrapper>
      <Navbar />
      <ProductGrid parentId={match.params.id} />
      {Number(match.params.id) !== 0 && <Link to={`/0`}>Temp Back Link</Link>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
`

export default ProductsPage
