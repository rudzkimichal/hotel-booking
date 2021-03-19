
import styled from 'styled-components';
import Item from './Item';
import {VenuesContext} from '../../context/context';
import {useContext, useState, useEffect} from 'react';

const ItemsListWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
border-radius: 5px;
background: #fafffa;
border: 1px solid red;
padding: 1rem;
margin-bottom: 1rem;
`;

const ItemsList = () => {

  const Venues = useContext(VenuesContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(Venues)
  }, [Venues]);

  console.log(items);

  let newItems = [];

  const deleteItem = id => {
    console.log('clicked');
    newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }

  return (
    <ItemsListWrapper>
      {items.map(item => <Item key={item.id} item={item} deleteItem={() => deleteItem(item.id)} />)}
    </ItemsListWrapper>
  );
}

export default ItemsList;
