import { Container } from 'react-bootstrap';

export const ItemListContainer = ({ greeting = 'Items'}) => {
    
  return (
    <Container>{ greeting }</Container>
  )
}
