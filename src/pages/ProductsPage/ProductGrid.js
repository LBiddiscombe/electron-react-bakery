import React from 'react'
import styles from './ProductGrid.module.css'
import ProductCard from './ProductCard'
import { items } from '../../initialData.js'

const ProductGrid = ({ parentId }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {items
          .filter(i => i.parent === Number(parentId))
          .map(item => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.label}
              image={item.image}
              type={item.type}
            />
          ))}
      </div>
    </div>
  )
}

export default ProductGrid
