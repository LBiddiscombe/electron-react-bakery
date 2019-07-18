import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        <Link to={`/0`}>Start Here</Link>
      </h1>
    </div>
  )
}

export default HomePage
