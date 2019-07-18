import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductsPage.module.css'
import ProductGrid from '../ProductsPage/ProductGrid'

const ProductsPage = ({ match }) => {
  return (
    <div className={styles.wrapper}>
      <ProductGrid parentId={match.params.id} />
      {Number(match.params.id) !== 0 && <Link to={`/0`}>Temp Back Link</Link>}
    </div>
  )
}

export default ProductsPage
