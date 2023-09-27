import { 
  Row,
} from 'react-bootstrap';

import { Item } from './Item';


export const ItemList = ({ data }) => {

  return (
  
      <Row className='d-flex flex-wrap justify-content-around'>
        {
          data.map((item) => <Item key = {item.id}  { ...item } />)
        }
      </Row>
                  
      
  );
}
