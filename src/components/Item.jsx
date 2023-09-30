import '../assets/styles/components/item.css';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/index';

import { FavoriteBtn } from './FavoriteBtn';

export const Item = ({id, name, price, images, discount}) => {
  

  const navigate = useNavigate();
  const finalPrice = Math.ceil(price - (price * discount / 100))
  const { user } = useAuth();


  const goTo = () => {
    navigate(`/item/${id}`)
  }

  return (
    <Card 
      style={{cursor: 'pointer' }} 
      className='shadow-sm p-3 bg-white rounded-4 product'
      onClick = { goTo }
    >
      <span className='discount-product'>{discount}% off</span>
      <Card.Img 
        variant="top" 
        src = { images[0] } 
        style={{ height: '10rem', width: '10rem', alignSelf: 'center' }} 
        className = 'm-3'
      />
      <Card.Body>
        <Card.Title style={
            {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }
          }>
            { name }
          </Card.Title>
        <div className='price-container'>
            <span className='price-product'>S/{price}</span>
            <span className='price-discount'>S/{finalPrice}</span>
        </div>  
        <div className='position-absolute end-0 bottom-0 mb-3 me-3'
        >
          {
            user &&
            <FavoriteBtn productId = {id} />
          }
        </div>
      </Card.Body>
    </Card>
  )
}
