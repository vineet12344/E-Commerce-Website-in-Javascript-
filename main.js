import './style.css'
import products from './api/products.json';
import { showProductContainers } from './homeProductCards';

console.log(products);

// call function to display cards on page

showProductContainers(products);