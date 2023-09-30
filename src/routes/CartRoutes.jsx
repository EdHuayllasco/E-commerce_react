import { Navigate, Route, Routes } from "react-router-dom"
import { Cart, Checkout, Confirmation } from "../pages/index"
import { Breadcrumb } from "../components/index"
import { useCart } from "../context/index"

export const CartRoutes = () => {
  const { 
      quantityItems
  } = useCart();
  return (
        <>
          {
            quantityItems > 0 && <Breadcrumb/>
          }
            <Routes>
                <Route path = "" element = {<Cart/>}/>
                <Route path = "/checkout" element = { <Checkout/> }/>
                <Route path = "/confirmation" element = { <Confirmation/> }/>
                <Route path = "/*" element = { <Navigate to = "/"/> } />

            </Routes>
        </>
  )
}
