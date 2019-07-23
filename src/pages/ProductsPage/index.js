import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useMedia from '../../hooks/useMedia'
import Navbar from '../../components/Navbar'
import ProductGrid from '../ProductsPage/ProductGrid'
import { items } from '../../initialData.js'

const ProductsPage = ({ match }) => {
  const parentId = Number(match.params.id)
  const cards = items.filter(i => i.parent === parentId)
  const cardCount = useMedia(
    // Media queries
    ['(min-width: 1152px)', '(min-width: 1024px)', '(min-width: 600px)'],
    // Card counts (relates to above media queries by array index)
    [18, 15, 8],
    // Default card count
    8
  )

  // add some placeholders if required
  let index = items.length
  while (cards.length < cardCount) {
    cards.push({ id: index++, type: 'empty' })
  }

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
