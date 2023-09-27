import React from 'react'
import { ItemList } from '../components/ItemList'
import { useFetch } from '../hooks/useFetch';
import { URL_API } from '../utils/constants';
import { useParams } from 'react-router-dom';
import { Col, Container, Spinner, Row } from 'react-bootstrap';
import { NotFound } from '../components/NotFound';

export const ItemListContainer = () => {

    const { categoryId } = useParams();

    const url = (!categoryId) ?  URL_API : `${URL_API}/category/${categoryId}`

    const {data, isLoading} = useFetch(url);

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
                <ItemList data={data} />
              </Container>
            : <NotFound/>
        }
      </Container>
    )
}
