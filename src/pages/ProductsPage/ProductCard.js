import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from '../../images/placeholder.png'
import arrow from '../../images/chevron-right.svg'
import styled from 'styled-components'

const ProductCard = ({ id, name, image, type }) => {
  const src = image ? `images/${image.replace(/\\/g, '/')}` : placeholder
  return (
    <Link to={`/${id}`}>
      <Card>
        <Image src={src} alt={name} />
        <Content>
          <Label>
            <span>{name.toUpperCase()}</span>
            {type === 'menu' && <img src={arrow} alt='' />}
          </Label>
        </Content>
      </Card>
    </Link>
  )
}

const Card = styled.div`
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
