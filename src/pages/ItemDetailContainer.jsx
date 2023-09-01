import { Container, Row, Col, Image, Button} from "react-bootstrap"
import { useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { CartControlButtons } from "../components/CartControlButtons";
import { NotFound } from "../components/NotFound";

export const ItemDetailContainer = () => {

  const { state } = useLocation();

  if (!state) return <NotFound/>;

  const {
    description,
      price,
      title,
      image,
      id
  } = state;


  const { 
    getQuantityItemById,
    addItem
  } = useCart();

  const quantityItem = getQuantityItemById(id);


  return (
    <Container  className = "py-4 mt-3 d-flex detail-item__container">
      <Col className=" d-flex justify-content-center">
        <Image src={image} style={{ width: '60%'}}/>
      </Col>
      <Col className="p-5">
        <h4>{title}</h4>
        <p>{ description }</p>

        <h3>{price} $</h3>
        <div className="d-flex w-100 justify-content-between gap-3" >
          {
            quantityItem > 0
            ? <CartControlButtons item = {{
                quantityItem,
                title,
                price,
                image,
                id,
              }}/>
            : <Button
                className="w-100"
                onClick = { 
                  () => addItem(id, {
                    title, price, image, description
                  })}
                  > 
            Add to cart 
          </Button>
          }
        </div>
      </Col>
    </Container>
    
  )
}
