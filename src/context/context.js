
import {createContext} from 'react';

export const VenuesContext = createContext([]);

export const TotalPriceContext = createContext({
  totalPrice: 0,
  calculateHotelPrice: () => {}
});
