
import styled from 'styled-components';
import Item from './Item';
import {VenuesContext} from '../../context/context';
import {useContext} from 'react';

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

  const handleDelete = () => {
    Venues.filter((item, index) => item[index] !== 1);
  };

  return (
    <ItemsListWrapper>
      {Venues.map((item, index) => <Item key={index} item={item} onDelete={handleDelete} />)}
    </ItemsListWrapper>
  );
}

export default ItemsList;
