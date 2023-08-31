import { 
  Container,
  Col,
  Row,
  Spinner
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { URL_API } from '../utils/constants';
import { useFetch } from '../hooks/useFetch';
import { Item } from '../components/Item';


export const ItemListContainer = ({ greeting = 'Wellcome to my page '}) => {

  const { categoryId } = useParams();

  const url = (!categoryId) ?  URL_API : `${URL_API}/category/${categoryId}`

  const { 
    isLoading, 
    data,
    hasError
  } = useFetch(url);
    
  return (
    <Container>
      <Col>
        <Row>
        <h4 className='text-center text-uppercase my-5'>{ (!categoryId) ? 'All products' : categoryId  }</h4>
        </Row>
      </Col>
      <Row className='d-flex flex-wrap justify-content-around'>
            {
              isLoading
                ?  <Spinner animation="border" variant="info" />
                : data.map((item) => <Item key = {item.id}  { ...item } />)
            }
          </Row>
    </Container>
  );
}
