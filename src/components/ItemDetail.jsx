import '../assets/styles/components/itemDetail.css';
import { Button, Image } from "react-bootstrap";
import { Counter } from "./Counter";
import { useState } from "react";

export const ItemDetail = ({ data, addItem }) => {

  
  const { 
    name, 
    description,
    details,
    images, 
    price,
    discount,
    id
  } = data;

  const [quantityToIncrement, setQuantityToIncrement] = useState(1);

  const [imageSelected, setImageSelected] = useState({
    image: images[0],
    index: 0
  });

  const onChangeImage = (index) => {
    setImageSelected({
      image: images[index],
      index
    })
  }

  const imagesQuantity = images.length;
  const priceWithDiscount = price - ((price * discount) / 100);
  

  const elements = [];
    for (const atrr in details) {
      if (details.hasOwnProperty(atrr)) {
        elements.push(
          <li key={atrr}>
            <strong>{atrr}:</strong>  {details[atrr]}
          </li>
        );
      }
    }

  return (
    <>
      <div className = "product-container my-3">
        <div className="product-image-container shadow-sm p-3 m-1 rounded-4">
          <Image 
            src={imageSelected.image}
            className="image-displayed mb-3"/>
          <div className="images-list-container">
            {
              images.map((img, index) => 
                <Image 
                  src={img}
                  onClick={() => onChangeImage(index)}
                  key={`${id}-img-${index}`}
                  style={{ width: `${100/imagesQuantity}%`, maxWidth: '100px', maxHeight: "100px"}} 
                  className={`image-list ${(index == imageSelected.index) ? 'image-selected': ''}`}/>
              )
            }
          </div>
        </div>
        <div className="product-details-container shadow-sm m-1 rounded-4">
          <h4 className="product-title">{name}</h4>
          <hr />
          <ul className="product-details">
            {
              description.map((des, index) => <li key={`${id}-des-${index}`}>{des}</li> )
            }
          </ul>
          <hr />
          <div className="price-container"> 
            <h4 className="discounted-price">
              S/ {Math.ceil(priceWithDiscount)} 
            </h4>
            <h4 className="total-price">S/ {price}</h4>
            <h6 className="discount py-1 px-3 rounded-3">off {discount}%</h6>
          </div>
          <div className = "counter-container" >
              <Counter 
                quantity = {quantityToIncrement}
                setQuantity={ setQuantityToIncrement }
                />
              <Button
                className="bt main-btn rounded-3"
                onClick={() => addItem(id, 
                  {
                    title: name ,
                    price,
                    priceWithDiscount: Math.ceil(priceWithDiscount),
                    image: imageSelected.image,
                    discount
                  }, quantityToIncrement
                )}
              >
                  Agregar al carrito
              </Button>
              {/* <FavoriteBtn productId={id}/> */}
          </div>
        </div>
      </div>
      <div className = "product-description-container rounded-4 shadow-sm m-1">
        <h4 className="description-title">Descripción</h4>
        <hr />
        <ul>
          {
            elements
          }
        </ul>
       
      </div>

    </>
  )
}
