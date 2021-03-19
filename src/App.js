
import Cart from './pages/Cart';
import styled from 'styled-components';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {VenuesContext} from './context/context';
import Payment from './pages/Payment';

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

  const [venues, setVenues] = useState([]);

  useEffect(() => {
    axios.get('https://60535bfa45e4b3001729179b.mockapi.io/api/all')
    .then(resp => resp.data)
    .then(data => setVenues(data))
    .catch(err => console.error(err));
  }, []);



  return (
    <VenuesContext.Provider value={venues}>
      <Header>
        <h1>Hotel booking tool</h1>
      </Header>

      <Main>
      <Cart />
      <Payment />
      </Main>
    </VenuesContext.Provider>
  );


}

export default App;
