import React, { useState } from 'react'
import placeholder from '../../images/placeholder.png'
import styled from 'styled-components'
import BakeryLabel from './BakeryLabel'

const ProductCard = props => {
  const [showLabel, setShowLabel] = useState(false)
  const { label, image } = props.product
  const src = image ? `images/${image.replace(/\\/g, '/')}` : placeholder

  const onLabelClose = e => {
    setShowLabel(false)
    e.stopPropagation()
  }

  return (
    <Card onClick={() => setShowLabel(true)}>
      <Image src={src} alt={label} />
      <Content>
        <Label>
          <span>{label.toUpperCase()}</span>
        </Label>
      </Content>
      {showLabel && (
        <BakeryLabel product={props.product} onClick={onLabelClose} />
      )}
    </Card>
  )
}

const Card = styled.div`
  cursor: pointer;
  position: relative;
  width: 10rem;
  height: 8rem;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000022;
  color: white;
  position: absolute;
  top: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  place-items: end center;
`

const Label = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  text-align: center;
  min-height: 3rem;
  width: 100%;
  background-color: #00000044;
  text-shadow: 0px 0px 2rem #000000;
`

export default ProductCard
