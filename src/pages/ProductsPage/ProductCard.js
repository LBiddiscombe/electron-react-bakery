import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from '../../images/placeholder.png'
import arrow from '../../images/chevron-right.svg'
import styles from './ProductCard.module.css'

const ProductCard = ({ id, name, image, type }) => {
  const src = image ? `images/${image.replace(/\\/g, '/')}` : placeholder
  return (
    <Link to={`/${id}`}>
      <div className={styles.card}>
        <img src={src} className={styles.bgimg} alt={name} />
        <div className={styles.content}>
          <p>
            <span>{name.toUpperCase()}</span>
            {type === 'menu' && <img src={arrow} alt='' />}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
