import React from 'react'
import logo from '../../images/logo.svg'
import styles from './HomePage.module.css'
import Navbar from '../../components/Navbar'
import ProductGrid from './ProductGrid'

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <ProductGrid />
    </div>
  )
}

export default HomePage
