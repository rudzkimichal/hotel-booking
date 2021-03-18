
import styled from 'styled-components';

const ItemContainer = styled.div`
width: 100%;
min-height: 200px;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
margin-bottom: 1rem;
`;

const Photo = styled.div`
width: 20%;
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

const Item = () => {
 return (
   <ItemContainer>
    <Photo>Photo</Photo>
    <ColumnContainer>
      <div>Name</div>
      <div>Desc</div>
    </ColumnContainer>
    <RowContainer>
      <button>-</button>
      <span>number</span>
      <button>+</button>
    </RowContainer>
    <ColumnContainer>
      <div>Price</div>
      <div>Delete</div>
    </ColumnContainer>
   </ItemContainer>
 );
};

export default Item;
