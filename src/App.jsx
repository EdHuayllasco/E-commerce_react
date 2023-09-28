import { CartProvider } from './context/CartContext'
import { MainRoutes } from './routes/MainRoutes'


function App() {

  return (
    <CartProvider>
      <MainRoutes/>
    </CartProvider>
  )
}

export default App
