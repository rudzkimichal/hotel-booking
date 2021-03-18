
import Cart from './pages/Cart';
import styled from 'styled-components';

const Header = styled.header`
display: flex;
justify-content: center;
align-items: center;
font-size: 5rem;
font-weight: 700;
margin: 2rem 0;
font-family: 'Oswald', sans-serif;
text-transform: uppercase;
`;

const Main = styled.main`
display: flex;
justify-content: center;
`;


const App = () => {
  return (
    <>
    <Header>
      <h1>Hotel booking tool</h1>
    </Header>

    <Main>
    <Cart />
    </Main>
    </>
  );


}

export default App;
