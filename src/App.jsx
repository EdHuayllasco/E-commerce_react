import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { MainRoutes } from './routes/MainRoutes'


function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <MainRoutes/>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
