import { Button, Image } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import success from '../assets/images/completing.svg'


export const Confirmation = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { user } = useAuth();


  return (
    <div className="text-center my-5">
        <h4>¡Confirmación de compra!</h4>
        <Image src={success} style={{
          width: '200px'
        }}
        className="my-4"
        />
        <p>Felicidades su pedido con el <strong>Código: { state?.orderId } </strong> se realizo con exito</p>
        {
          user 
          ? <>
            <p>Para saber el estado de sus pedidos haga click en el siguiente boton</p>
            <Button
              className = "bt main-btn" 
              onClick={ () => navigate('/account',{state:{option:'orders'}})}>
                Mis pedidos
            </Button>
          </>
          :<Button onClick={ () => navigate('/')}>Ir a productos</Button>
        }
    </div>
  )
}
