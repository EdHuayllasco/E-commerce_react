import { Route, Routes, BrowserRouter} from 'react-router-dom'

import MainLayout from '../layout/MainLayout';
import { ItemListContainer, ItemDetailContainer, Home } from '../pages/index';

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
          </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}
