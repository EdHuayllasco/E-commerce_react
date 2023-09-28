import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Button, Stack } from "react-bootstrap";
import { CartItem } from "../components/CartItem";

import '../assets/styles/pages/cart.css'; 

export const Cart = () => {
  const { 
      cartItems, 
      totalPriceCart,
      clearCart,
      quantityItems
  } = useCart();

  const navigate = useNavigate();

  return (
      <div className="p-3">
          {
              (quantityItems > 0)
              ?  <>
                  <div className = 'cart-container d-flex gap-3' >
                      <div  className = 'my-3'>
                          <h4>Carrito <small>({quantityItems} productos)</small></h4>
                          <Stack gap={3}  className="w-100">
                              {
                                  cartItems.map(item => {
                                      return (
                                          <CartItem
                                            key={item.id} 
                                                {...item }
                                            />
                                  )})
                              }
                          </Stack>
                      </div>
                  </div>
                  <hr />
                  <div className = 'cart-purchase-summary'>
                      <div className="total-price-container">
                          <h5 className='fw-bold'>Total</h5> 
                          <h5 className='fw-bold'>S/ {totalPriceCart}</h5>
                      </div>
                      <div className="checkout-btn-container">
                          <Button 
                            variant="secondary"
                            className='bt secundary-btn '
                            onClick={clearCart}
                          >
                            Vaciar carrito
                          </Button>
                          <Button 
                            onClick = { () => navigate('/cart/checkout')}
                          >
                            Continuar al checkout
                          </Button>
                      </div>
                  </div>
              </>
              : <div className = 'cart-empty-container'>
                  <h4>Tu carrito está vacío</h4> 
                  <p>Para continuar comprando, selecciona una categoría, o busca por tu producto.</p>
                  <Button className="btn main-btn" onClick = { () => navigate('/')}>
                      Elige un producto
                  </Button>
                </div>
          }

    </div>
  )
};
