import React from 'react'
import styled from 'styled-components'
import MenuCard from './MenuCard'
import ProductCard from './ProductCard'
import { items } from '../../initialData.js'

const ProductGrid = ({ parentId }) => {
  return (
    <Wrapper>
      <Grid>
        {items
          .filter(i => i.parent === Number(parentId))
          .map(item => {
            if (item.type === 'menu')
              return <MenuCard key={item.id} product={item} />
            else return <ProductCard key={item.id} product={item} />
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
