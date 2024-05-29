import { getCartProuctFromLS } from "./getCardProuctFromLS";
import { updateCart } from "./updateCart";

getCartProuctFromLS();

export const addToCart = (event, id, stock) => {
  const currentCardElement = document.querySelector(`#card${id}`);

  const arrLocalStorageProduct = getCartProuctFromLS();

  let quantity = parseInt(
    currentCardElement.querySelector(".productQuantity").innerText
  );
  let price = currentCardElement.querySelector(".productPrice").innerText;

  
  // console.log(quantity+"  "+price);
  
  price = price.replace("₹", "");
  let exsistingProduct = arrLocalStorageProduct.find((currProd) => currProd.id ===  id);


 if(exsistingProduct && quantity > 1){
  quantity = Number(exsistingProduct.quantity) + quantity;
  price = Number(price * quantity);

  let updatedCart = {id,quantity,price};

  updatedCart = arrLocalStorageProduct.map((currProd)=>{
    // if(currProd.id === id){
    //   updatedCart;
    // }
    // else{
    //   currProd;
    // }
    return(currProd.id === id ? updatedCart : currProd);
  });

  localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));
 }

 if(exsistingProduct ){
  // alert("Duplicate Hai");
 return false;
}


  price = Number(price * quantity);
  quantity = Number(quantity);


  arrLocalStorageProduct.push({
    id,
    quantity,
    price,
  });
  localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));

 

  updateCart(arrLocalStorageProduct);
};

