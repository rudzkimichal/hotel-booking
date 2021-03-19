
import styled from 'styled-components';
import {useState, useContext} from 'react';
import {TotalPriceContext} from '../../context/context';
import bin from '../../assets/bin.svg';

const ItemContainer = styled.div`
width: 100%;
min-height: 200px;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
margin-bottom: 1rem;
`;

const Image = styled.img`
max-width: 20%;
max-height: 100%;
`;

const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
align-items: space-between;
height: 100%;
width: 20%;
`;

const RowContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 20%;
`;

const Item = ({item, onDelete}) => {

  const [quantity, setQuantity] = useState(0);
  const PriceContext = useContext(TotalPriceContext);

  const increment = () => {
    setQuantity(quantity => quantity + 1);
  }

  const decrement = () => {
    setQuantity(quantity => quantity - 1);
  }

  const handleClick = e => {
    e.target.value === '+' ? increment() : decrement();
    PriceContext.calculateHotelPrice(item.price, e.target.value);
  }

 return (
   <ItemContainer>
    <Image src={item.image} alt={item.image} />
    <ColumnContainer>
      <div>{item.name}</div>
      <div>{item.location} - {'\u00A3'}{item.price} per night</div>
    </ColumnContainer>
    <RowContainer>
      <button value='-' onClick={handleClick} disabled={quantity < 1}>-</button>
      <span>{quantity}</span>
      <button value='+' onClick={handleClick} disabled={quantity > 15}>+</button>
    </RowContainer>
    <ColumnContainer>
      <div>{'\u00A3'}{item.price * quantity}</div>
      <Image onClick={onDelete} src={bin} alt={bin} />
    </ColumnContainer>
   </ItemContainer>
 );
};

export default Item;
