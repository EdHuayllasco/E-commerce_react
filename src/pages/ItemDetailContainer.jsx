import { Container, Row, Col, Image, Button} from "react-bootstrap"
import { useLocation, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { NotFound } from "../components/NotFound";
import { useFirestore } from "../hooks/useFirestore";
import { getProductById } from "../firebase/items";
import { Loading } from "../components/Loading";
import { ItemDetail } from "../components/ItemDetail";

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
