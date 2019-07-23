import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import dayjs from 'dayjs'
import Barcode from 'react-barcode'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import useBlurModalBG from '../../hooks/useBlurModalBG'
import { ReactComponent as Logo } from '../../images/logo.svg'

// 57mm x 75mm (13mm header)

const BakeryLabel = ({ product, onClick }) => {
  useLockBodyScroll()
  useBlurModalBG(document.getElementById('root'))
  const { title, allergens, price, life, barcode } = product.labelData
  const bestbefore = dayjs(new Date())
    .add(life, 'day')
    .format('DD/MM/YYYY')

  const formatPrice = price => {
    if (price < 1) return `${parseInt(price * 100)}p`
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(price)
  }

  return ReactDOM.createPortal(
    <Wrapper onClick={onClick}>
      <Label>
        <Header>
          <Logo />
          Bakery
        </Header>
        <Title>{title}</Title>
        <Allergens>{allergens}</Allergens>
        <Price>{formatPrice(price)}</Price>
        <BestBefore>
          Best Before: <strong>{bestbefore}</strong>
        </BestBefore>
        <Barcode
          value={`${barcode}456789012345`}
          width={1}
          height={35}
          fontSize={12}
          margin={0}
          marginBottom={10}
        />
      </Label>
    </Wrapper>,
    document.getElementById('modals')
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
  background-color: #ffffffcc;
`

const Label = styled.div`
  transform: scale(1.5);
  transition: all 1s ease;
  height: 75mm;
  width: 57mm;
  border-radius: 1mm;
  background-color: white;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 13mm 1fr auto 1fr auto auto;
  grid-template-areas: 'header' 'title' 'allergens' 'price' 'bestbefore' 'barcode';
  align-items: center;
  justify-items: center;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
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
  font-size: 0.8rem;
`

const Barcode2 = styled.div`
  grid-area: barcode;
  height: 9mm;
`

export default BakeryLabel
