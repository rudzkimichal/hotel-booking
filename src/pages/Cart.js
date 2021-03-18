
import styled from 'styled-components';
import Item from '../components/cart/Item';

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

const ItemsList = styled(CartContainer)`
width: 100%;
flex-direction: column;
margin-bottom: 1rem;
`;

const Summary = styled.div`
display: flex;
flex-direction: column;
`;

const Cart = () => {
  return (
    <CartContainer>
      <ItemsList>
        <Item />
        <Item />
        <Item />
      </ItemsList>
      <Summary>
      <div>Price</div>
      <button>Pay</button>
      </Summary>
    </CartContainer>
  );

};

export default Cart;
