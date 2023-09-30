import { useState } from "react"
import { addFavoriteProduct, deleteFavoriteProduct } from "../firebase/favorites";

import { useAuth } from "../context/index";
import { favoriteProduct } from "../utils/favorites";
import { CustomIcon  } from "./Icons"

export const FavoriteBtn = ({ productId }) => {
  
  const { user, favorites } = useAuth();
  const product = favoriteProduct(productId, favorites) ;

  const [active, setActive ] = useState(product ? true: false);

  const handleActive = (e) => {
    e.stopPropagation();
    
    if(active) {
      deleteFavoriteProduct(product?.id)
    } else {
      addFavoriteProduct(productId, user?.uid)
    }
    setActive(!active)
  }

  
  return (
    <button 
      className='btn-favorite' 
      onClick={handleActive}>
        {
          <CustomIcon size={18} name={active ? "favorite-fill": "favorite"} color="#48BFE7"/>
        }
    </button>
  )
}
