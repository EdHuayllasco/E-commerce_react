import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { URL_API } from '../utils/constants';
import { ItemList } from '../components/ItemList';
import { useFetch } from '../hooks/useFetch';


export const Home = () => {


    const {data, isLoading} = useFetch(URL_API);
    return (
        <Container className='d-flex justify-content-center  py-4'>
        {
          isLoading
          ?  <Spinner animation="border" variant="info" />
          : ( data?.length > 0) 
            ? <Container>
                <Col>
                  <Row>
                  <h4 className='text-center text-uppercase my-5'> All products</h4>
                  </Row>
                </Col>
                <ItemList data={data} />
              </Container>
            : <NotFound/>
        }
      </Container>
    )
}
