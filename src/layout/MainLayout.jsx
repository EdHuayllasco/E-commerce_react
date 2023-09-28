import { useEffect, useState } from 'react';
import {Navbar} from '../components/Navbar';
import { getCategories } from '../firebase/category';

const MainLayout = ({children}) => {

  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCategoriesFirebase();
  }, [])

  const getCategoriesFirebase = async() => {
    const data = await getCategories();
    setCategories(data)
  }
  
  return (
    <>
        <Navbar categories = {categories}/>
        <div className="main-container">
            {children}
        </div>
    </>
  )
}

export default MainLayout;