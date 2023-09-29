import { Button, Image } from "react-bootstrap";
import img404 from '../assets/images/404.svg';
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="d-flex justify-content-center flex-column align-items-center">
            <h3 className="text-center my-5">Página no encontrada</h3>
            <Image src={img404} style={{width: '50%'}} className="my-4"/>
            <p>Disculpa, la página a la que quieres acceder no existe</p>
            <Button><Link to="/" style={{
                color: 'white',
                textDecoration: 'none'
            }}>Volver a Home</Link></Button>
        </div>
    );
}
