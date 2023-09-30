import '../assets/styles/pages/checkout.css';
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/index";
import { createOrder } from "../firebase/index";
import { CheckoutForm, PurchaseSummary } from "../components/index";

export const Checkout = () => {
  const { 
      cartItems,
      totalPriceCart,
      clearCart
  } = useCart();
  const navigate = useNavigate();

  const generateOrder = async(values) => {

    const currentDate = new Date();
    const newOrder = {
      date: currentDate.toLocaleString(),
      state: 'generated',
      items: cartItems,
      totalPriceOrder: totalPriceCart
    }
    const orderId = await createOrder(newOrder, values.email)
    if(orderId) {
      navigate('/cart/confirmation', {state:{orderId}});
      clearCart();

    }
  }

  return (
    <div className="checkout-container">
      <CheckoutForm
        generateOrder =  {generateOrder}
      />
      <PurchaseSummary/>
    </div>
  )
}
