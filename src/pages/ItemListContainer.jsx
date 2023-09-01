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
import { NotFound } from '../components/NotFound';


export const ItemListContainer = ({ greeting = 'Wellcome to my page '}) => {

  const { categoryId } = useParams();

  const url = (!categoryId) ?  URL_API : `${URL_API}/category/${categoryId}`

  const { 
    isLoading, 
    data,
    hasError
  } = useFetch(url);

  console.log(data);
    
  return (
  
          <Container className='d-flex justify-content-center  py-4'>
            {
              isLoading
              ?  <Spinner animation="border" variant="info" />
              : ( data?.length > 0) 
                ? <Container>
                    <Col>
                      <Row>
                      <h4 className='text-center text-uppercase my-5'>{ (!categoryId) ? 'All products' : categoryId  }</h4>
                      </Row>
                    </Col>
                    <Row className='d-flex flex-wrap justify-content-around'>
                      {
                        data.map((item) => <Item key = {item.id}  { ...item } />)
                      }
                    </Row>
                  </Container>
                : <NotFound/>
            }
          </Container>
      
  );
}
