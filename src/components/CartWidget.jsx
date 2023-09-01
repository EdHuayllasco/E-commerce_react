import { Button } from "react-bootstrap";
import { CartIcon } from './Icons';
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export const CartWidget = ({ cartQuantity }) => {

    const { quantityItems } = useCart()
    const navigate = useNavigate();

    const goToCart = () => navigate(`/cart`);
    return (

        <>
            { quantityItems > 0 && 
                <button
                className = "button"
                onClick={goToCart}
                style={{ position: "relative"}}

            >
                <CartIcon/>

                <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                    color: "white",
                    width: "1.2rem",
                    height: "1.2rem",
                    position: "absolute",
                    top: "-0.5rem",
                    right: "0rem",
                    transform: "translate(25%, 25%)",
                }}
                >
                {quantityItems}
                </div>
            </button>
            }
        </> 
    )
}
