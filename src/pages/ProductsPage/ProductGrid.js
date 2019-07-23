import React from 'react'
import styled from 'styled-components'
import MenuCard from './MenuCard'
import ProductCard from './ProductCard'

const ProductGrid = ({ cards }) => {
  return (
    <Wrapper>
      <Grid>
        {cards.map(card => {
          switch (card.type) {
            case 'menu':
              return <MenuCard key={card.id} product={card} />
            case 'empty':
              return <Placeholder key={card.id} />
            default:
              return <ProductCard key={card.id} product={card} />
          }
        })}
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0rem auto;
  padding: 1rem 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 10rem);
  grid-gap: 1rem;
  justify-content: center;
`

const Placeholder = styled.div`
  width: 10rem;
  height: 8rem;
  border: 2px solid #00000011;
`

export default ProductGrid
