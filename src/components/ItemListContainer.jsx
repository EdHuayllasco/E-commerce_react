import { Container } from 'react-bootstrap';

export const ItemListContainer = ({ greeting = 'Items'}) => {
    
  return (
    <Container>
      <h4 className='d-flex justify-content-center mt-2'>{ greeting }</h4>
    </Container>
  )
}
