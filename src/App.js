

import Cart from './pages/Cart';
import styled from 'styled-components';
import axios from 'axios';
import {useState, useEffect, lazy, Suspense} from 'react';

import NotFound from './pages/NotFound';
import {VenuesContext} from './context/context';

import {BrowserRouter as Router, Route, Switch, Redirect}  from 'react-router-dom';

const Shipping = lazy(() => import('./pages/Shipping'));


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
      <Router>
      <Switch>
      <Route exact path='/'>
      <Redirect to='/cart' />
      </Route>
      <Route path='/cart' component={Cart} />
      <Suspense fallback={<div>Loading...</div>}>
      <Route path='/shipping' component={Shipping} />
      </Suspense>
      <Route component={NotFound} />
      </Switch>
      </Router>
      </Main>
    </VenuesContext.Provider>
  );


}

export default App;
