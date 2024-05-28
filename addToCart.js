import { getCartProuctFromLS } from "./getCardProuctFromLS";
import { updateCart } from "./updateCart";

export const addToCart = (event, id, stock) => {
  const currentCardElement = document.querySelector(`#card${id}`);

  const arrLocalStorageProduct = getCartProuctFromLS();

  let quantity = parseInt(
    currentCardElement.querySelector(".productQuantity").innerText
  );
  let price = currentCardElement.querySelector(".productPrice").innerText;

  // console.log(quantity+"  "+price);

  price = price.replace("₹", "");
  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorageProduct.push({
    id,
    quantity,
    price,
  });
  localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));

  updateCart();
};

