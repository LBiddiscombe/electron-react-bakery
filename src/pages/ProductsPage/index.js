import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../../components/Navbar'
import ProductGrid from '../ProductsPage/ProductGrid'

import { items } from '../../initialData.js'

const ProductsPage = ({ match }) => {
  const parentId = Number(match.params.id)
  const cards = items.filter(i => i.parent === parentId)

  return (
    <Wrapper>
      <Navbar title='Bakery' />
      <ProductGrid cards={cards} />
      {Number(match.params.id) !== 0 && <Link to={`/0`}>Temp Back Link</Link>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
`

export default ProductsPage
