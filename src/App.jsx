import { Navbar } from './components/Navbar'
import { ItemListContainer } from './pages/ItemListContainer'
import { Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './pages/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import { CartContainer } from './pages/CartContainer'

function App() {

  return (
    <CartProvider>
      <Navbar/>
      <Routes>
        <Route
          path = '/'
          element = { <ItemListContainer/>}
        />
        <Route
          path = 'category/:categoryId'
          element = { <ItemListContainer/>}
        />
        <Route
          path = 'item/:itemId'
          element = { <ItemDetailContainer/>}
        />
         <Route
          path = 'cart/'
          element = { <CartContainer/>}
        />
      </Routes>
    </CartProvider>
  )
}

export default App
