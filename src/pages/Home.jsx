import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { ItemList } from '../components/ItemList';
import { Loading } from '../components/Loading';
import { useParams } from 'react-router-dom';
import { useFirestore } from '../hooks/useFirestore';
import { getProductsByCategory } from '../firebase/items';


export const Home = () => {


    const { categoryId } = useParams();

    const { isLoading, data, hasError} = useFirestore(getProductsByCategory, categoryId);

    if(isLoading) return <Loading/>

    return (
      <>
          <h4 className='text-center text-uppercase my-5'> All products</h4>
          <div className='items-container'>
          {
            ( data?.length > 0) 
              ? <ItemList data={data} />
              : <NotFound/>
          }
        </div>
      </>
    )
}
