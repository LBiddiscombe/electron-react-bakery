import React from 'react'
import logo from '../../images/logo.svg'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app_header}>
        <img src={logo} className={styles.app_logo} alt='logo' />
        <h2>Welcome to React/Electron!</h2>
      </div>
      <p className={styles.app_intro}>Hello Electron!</p>
    </div>
  )
}

export default HomePage
