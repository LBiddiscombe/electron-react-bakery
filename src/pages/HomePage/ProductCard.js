import React from 'react'
import placeholder from '../../images/placeholder.png'
import arrow from '../../images/chevron-right.svg'
import styles from './ProductCard.module.css'

const ProductCard = ({ index, name, image }) => {
  const src = image ? `images/${image.replace(/\\/g, '/')}` : placeholder
  console.log(src)
  return (
    <a href='#' className={styles.card}>
      <img src={src} className={styles.bgimg} />
      <div className={styles.content}>
        <p>
          <span>{name.toUpperCase()}</span>
          <img src={arrow} />
        </p>
      </div>
    </a>
  )
}

export default ProductCard
