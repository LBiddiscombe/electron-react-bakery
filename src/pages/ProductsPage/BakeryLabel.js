import React from 'react'
import styled from 'styled-components'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import { ReactComponent as Logo } from '../../images/logo.svg'

// 57mm x 75mm (13mm header)

const BakeryLabel = ({ product, onClick }) => {
  useLockBodyScroll()
  const { title, allergens, price, life, barcode } = product.labelData

  const formatPrice = price => {
    if (price < 1) return `${parseInt(price * 100)}p`
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(price)
  }

  return (
    <Wrapper onClick={onClick}>
      <Label>
        <Header>
          <Logo />
          Bakery
        </Header>
        <Title>{title}</Title>
        <Allergens>{allergens}</Allergens>
        <Price>{formatPrice(price)}</Price>
        <BestBefore>Best Before: 22/07/2019</BestBefore>
        <Barcode>1234</Barcode>
        <Ean>1234</Ean>
      </Label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 4;
  top: 0;
  left: 0;
  display: grid;
  place-items: center center;
  background-color: #00000099;
`

const Label = styled.div`
  height: 75mm;
  width: 57mm;
  border-radius: 1mm;
  background-color: white;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 13mm 1fr auto 1fr auto auto auto;
  grid-template-areas: 'header' 'title' 'allergens' 'price' 'bestbefore' 'barcode' 'ean';
  align-items: center;
`

const Header = styled.div`
  grid-area: header;
  background-color: #bf9b30;
  color: #333;
  width: 100%;
  border-radius: 1mm 1mm 0 0;
  height: 13mm;
  text-align: center;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 10mm;
    width: 10mm;
    margin-right: 4mm;
  }
`

const Title = styled.div`
  padding: 0 0.5rem;
  text-align: left;
  grid-area: title;
  font-weight: bold;
  font-size: 1.25rem;
`

const Allergens = styled.div`
  padding: 0 0.5rem;
  text-align: left;
  grid-area: allergens;
  font-size: 0.75rem;
`

const Price = styled.div`
  grid-area: price;
  font-size: 2.5rem;
  font-weight: bold;
`

const BestBefore = styled.div`
  grid-area: bestbefore;
  font-size: 0.9rem;
  font-weight: bold;
`

const Barcode = styled.div`
  grid-area: barcode;
  height: 9mm;
`

const Ean = styled.div`
  grid-area: ean;
`

export default BakeryLabel
