import { Route, Routes, BrowserRouter} from 'react-router-dom'

import MainLayout from '../layout/MainLayout';
import { ItemListContainer, ItemDetailContainer, Home } from '../pages/index';
import { CartRoutes } from './CartRoutes';

export const MainRoutes = () => {
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
              <Route 
              path="/cart/*" 
              element={<CartRoutes/>}
              />
          </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}