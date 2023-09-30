import { useParams } from 'react-router-dom';
import { ItemList, Loading, NotFound } from '../components/index'
import { useFirestore } from '../hooks/index';
import { getProductsByCategory } from '../firebase/index';

export const ItemListContainer = () => {

    const { categoryId } = useParams();

    const { isLoading, data, hasError} = useFirestore(getProductsByCategory, categoryId);

    if(isLoading) return <Loading/>
    
    return (
        <>
              {
                (data?.length > 0)
                ? <>
                    <h4 className='text-center my-5 text-uppercase'>{ (!categoryId) ? 'Todos los productos' : categoryId  }</h4>
                    <div className='items-container'>
                      <ItemList data={data}/>
                    </div>
                  </>
                  : <NotFound/>
              }
        </>
  
    )
}
