const RESPONSE = await fetch('https://api.escuelajs.co/api/v1/products');
const PRODUCTS = await RESPONSE.json();

export default PRODUCTS;
