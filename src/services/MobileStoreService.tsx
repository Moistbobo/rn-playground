import axios from './AxiosInstance';

const getItems = () => axios.get('/get-items');

const calculatePrice = (items: {_id: string; quantity: number}[]) =>
  axios.post('/calculate-price', {items});

const getPaymentIntent = (
  email: string,
  items: {_id: string; quantity: number}[],
) => axios.post('/create-payment-intent', {email, items});

const checkout = (items: {_id: string; quantity: number}[]) =>
  axios.post('/payment-sheet-checkout', {items});

export default {
  getItems,
  calculatePrice,
  getPaymentIntent,
  checkout,
};
