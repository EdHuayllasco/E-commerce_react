import { Navbar } from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { MainRoutes } from './routes/MainRoute'


function App() {

  return (
    <CartProvider>
      <MainRoutes/>
    </CartProvider>
  )
}

export default App
