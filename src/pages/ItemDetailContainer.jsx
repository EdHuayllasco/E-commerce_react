import { useLocation, useParams } from "react-router-dom";
import { useCart } from "../context/index";
import { NotFound, Loading, ItemDetail } from "../components/index";
import { useFirestore } from "../hooks/index";
import { getProductById } from "../firebase/index";

export const ItemDetailContainer = () => {

  const { itemId } = useParams();
  const { data, isLoading, error } = useFirestore(getProductById, itemId);

  const { 
    getQuantityItemById,
    addItem
  } = useCart();

  const quantityItem = getQuantityItemById(itemId);
  
  return (
    <>
      {
        (isLoading)
          ? <Loading/>
          : (!isLoading && !data)
            ? <NotFound/>
            : <ItemDetail 
                data={data}
                quantityItem={quantityItem}
                addItem={addItem}
              />
      }
    </>
  )
}
