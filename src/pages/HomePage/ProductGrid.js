import React from 'react'
import styles from './ProductGrid.module.css'
import ProductCard from './ProductCard'
import { items } from '../../initialData.js'

const ProductGrid = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {items
          .filter(i => i.parent === 3)
          .map((item, i) => (
            <ProductCard
              key={item.id}
              index={i + 1}
              name={item.label}
              image={item.image}
            />
          ))}
      </div>
    </div>
  )
}

export default ProductGrid
