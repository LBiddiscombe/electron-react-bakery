import React, { useState } from 'react'
import logo from '../images/logo.svg'
import menu from '../images/menu.svg'
import NavDrawer from './NavDrawer'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.navbar}>
      <img src={logo} className={styles.logo} alt='logo' />
      <h1 className={styles.title}>Bakery Labels</h1>
      <button onClick={() => setIsOpen(true)} className={styles.menu}>
        <img src={menu} alt='menu' />
      </button>
      <NavDrawer isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </div>
  )
}

export default Navbar
