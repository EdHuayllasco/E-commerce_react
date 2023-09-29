import { Button } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";


export const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const {orderId} = location.state;
  return (
    <div className="text-center my-5">
        <h4>¡Confirmación de compra!</h4>
        <p>Felicidades su pedido con el <strong>Código: {orderId}</strong> se realizo con exito</p>
        {
          user && <>
            <p>Para saber el estado de sus pedidos haga click en el siguiente boton</p>
            <Button
              className = "bt main-btn" 
              onClick={ () => navigate('/account',{state:{option:'orders'}})}>
                Mis pedidos
            </Button>
          </>
        }
    </div>
  )
}
