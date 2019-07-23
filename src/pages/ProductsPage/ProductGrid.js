import React from 'react'
import styled from 'styled-components'
import MenuCard from './MenuCard'
import ProductCard from './ProductCard'

const ProductGrid = ({ cards }) => {
  return (
    <Wrapper>
      <Grid>
        {cards.map(card => {
          if (card.type === 'menu')
            return <MenuCard key={card.id} product={card} />
          else return <ProductCard key={card.id} product={card} />
        })}
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0rem auto;
  padding: 0.5rem 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 10rem);
  grid-gap: 1rem;
  justify-content: center;
`

export default ProductGrid
