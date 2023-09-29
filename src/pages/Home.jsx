import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { ItemList } from '../components/ItemList';
import { Loading } from '../components/Loading';
import { useParams } from 'react-router-dom';
import { useFirestore } from '../hooks/useFirestore';
import { getProductsByCategory } from '../firebase/items';
import { NotFound } from '../components/NotFound';


export const Home = () => {


    const { categoryId } = useParams();

    const { isLoading, data, hasError} = useFirestore(getProductsByCategory, categoryId);

    if(isLoading) return <Loading/>

    return (
      <>
              {
                (data?.length > 0)
                ? <>
                    <h4 className='text-center my-5 text-uppercase'>{ (!categoryId) ? 'All products' : categoryId  }</h4>
                    <div className='items-container'>
                      <ItemList data={data}/>
                    </div>
                  </>
                  : <NotFound/>
              }
        </>
    )
}
