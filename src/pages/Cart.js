
import styled from 'styled-components';
import ItemsList from '../components/cart/ItemsList';
import {TotalPriceContext} from '../context/context';
import {useState} from 'react';

const CartContainer = styled.div`

width: 95vw;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
border-radius: 5px;
background: #fafffa;
border: 1px solid red;
padding: 1rem;

`;

const Summary = styled.div`
display: flex;
flex-direction: column;
`;

const Cart = () => {

  const [totalPrice, setTotalPrice] = useState(0);

  const calculateHotelPrice = (price, value) => {
    value === '+' ? setTotalPrice(totalPrice => totalPrice + price) : setTotalPrice(totalPrice => totalPrice - price);
  }

  return (
    <TotalPriceContext.Provider value={{totalPrice, calculateHotelPrice}}>
      <CartContainer>
        <ItemsList />
        <Summary>
        <div>Total: {'\u00A3'}{totalPrice}</div>
        <button>Buy</button>
        </Summary>

      </CartContainer>
    </TotalPriceContext.Provider>
  );

};

export default Cart;
