import { Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'

import MainLayout from '../layout/MainLayout';
import { ItemListContainer, ItemDetailContainer, Home } from '../pages/index';
import { CartRoutes } from './CartRoutes';
import { Account } from '../pages/Account';
import { useAuth } from '../context/AuthContext';

export const MainRoutes = () => {

  const { user } = useAuth()
  return (
    <BrowserRouter>
      <MainLayout>
          <Routes>
              <Route 
              path="/" 
              element={ <Home/> }
              />
              <Route 
              path="/category/:categoryId" 
              element={ <ItemListContainer/> } 
              />
              <Route 
              path="/item/:itemId" 
              element={<ItemDetailContainer />}
              />
              {
                user &
                  <Route 
                    path="/account" 
                    element={<Account/>}
                  />
              }
              <Route 
                path="/cart/*" 
                element={<CartRoutes/>}
              />
              <Route path = "/*" element = { <Navigate to = "/"/> } />
          </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}
