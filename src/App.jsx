import { AuthProvider, CartProvider } from './context/index'
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
