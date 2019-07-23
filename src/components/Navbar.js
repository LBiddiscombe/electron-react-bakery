import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../images/logo.svg'
import menu from '../images/menu.svg'
import styled from 'styled-components'

const Navbar = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavBar>
      <Link to={`/`}>
        <CoopLogo />
      </Link>
      <Title>{title}</Title>
      <Menu onClick={() => setIsOpen(true)}>
        <img src={menu} alt='menu' />
      </Menu>
    </NavBar>
  )
}

const NavBar = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'logo title menu';
  align-items: center;
  background-color: var(--primary-light);
  max-height: 5rem;
  text-align: center;
  svg {
    color: var(--primary-dark);
    fill: currentColor;
  }
`

const CoopLogo = styled(Logo)`
  grid-area: logo;
  width: 4rem;
  height: 4rem;
  margin: 0.5rem;
  -webkit-app-region: drag;
  :hover {
    cursor: grab;
  }
`

const Title = styled.h1`
  grid-area: title;
  font-weight: bold;
  color: var(--primary-dark);
  line-height: 4rem;
  margin: 0.5rem;
  white-space: nowrap;
`

const Menu = styled.button`
  border: none;
  background-color: transparent;
  grid-area: menu;
  width: 4rem;
  height: 4rem;
  margin: 0.5rem;
`

export default Navbar
