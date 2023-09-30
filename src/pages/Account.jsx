import  '../assets/styles/pages/account.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Tab, Tabs} from 'react-bootstrap';
import { useAuth } from '../context/index';
import { useEffect, useState } from 'react';
import { OrderList, CustomIcon, WishList, Loading} from '../components/index';
import { getOrderList, getProductById } from '../firebase/index';


export const Account = () => {

    const { state } = useLocation();

    const [tabActive, setTabActive] = useState(state?.option)
    const [data, setData] = useState({
        orders: [],
        wishList: [],
        isLoading: true
    })

    const {orders, wishList, isLoading} = data;

    const { user, favorites } = useAuth();

    const { displayName, email } = user?.providerData[0];

    useEffect(() => {

        const getData = async () => {
            setData({
                isLoading:true,
                ...data
            })
            
            const orders = await getOrderList(email);
            const wishList =  await getFavoriteListProducts();
    
            setData({
                isLoading: false,
                orders,
                wishList
            })
        }

        getData();
    }, [])

    const getFavoriteListProducts = async() => {
        let products = []

        for (const favorite of favorites) {
            const {
                name,
                images,
                price,
                discount,
                id
            } = await getProductById(favorite.productId)
            products.push({ 
                name,
                images,
                price,
                discount,
                id})
            }
        return products;

    }

    if(isLoading) {
        return <Loading/>
    }

    return (
        <div className="account-container">
            <div
                style={{
                    height: '200px'
                }} 
                className='account-info bg-white shadow-sm rounded-4 p-3 d-flex flex-column align-items-center'>
                <h4>Hola, {displayName}</h4>
                <CustomIcon name='user' size={50}/>
                
                {email}
            </div>
            <div className='tabs-container bg-white shadow-sm rounded-4 p-3'>
                <Tabs
                    defaultActiveKey={tabActive}
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    >
                    <Tab eventKey="orders" title="Historial de Pedidos" onClick={ () => setTabActive('orders') }>
                        {
                            orders?.length > 0
                                ? <OrderList orders = { orders } />
                                : <Message message="No tienes pedidos"/>
                        }
                    </Tab>
                    <Tab eventKey="favorites" title="Favoritos" onClick={ () => setTabActive('favorites')}>
                        {
                            wishList.length > 0
                                ? <WishList wishList={wishList}/>
                                : <Message message="Tu lista de deseos está vacía"/>                                    
                        }
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}


const Message = ({message}) => {
    const navigate = useNavigate()
    return (
        <div className='d-flex flex-column align-items-center p-3'>
            {message}
            <Button 
                className='m-3'
                onClick={() => navigate('/')}
            >Ver Productos</Button>
        </div>
)}