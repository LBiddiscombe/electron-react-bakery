import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import Routes from './components/Routes'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' exact component={HomePage} />
        <Route path='/:id' component={ProductsPage} />
      </Routes>
    </div>
  )
}

export default App
