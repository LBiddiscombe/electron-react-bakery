import React from 'react'
import close from '../images/close.svg'
import styles from './NavDrawer.module.css'

const NavDrawer = ({ isOpen, onClick }) => {
  return (
    <div
      className={isOpen ? styles.drawerIsOpen : styles.drawer}
      onClick={onClick}
    >
      <img className={styles.close} src={close} alt='close' />
    </div>
  )
}

export default NavDrawer
