const cartValue = document.querySelector("#cartValue");

export const updateCart = (cartProducts) => {
  // let itemCount = 0;
  // let localStorageItemsForCount = JSON.parse(
  //   localStorage.getItem("cartProductLS")
  // );
  // localStorageItemsForCount.map((item) => {

  //   itemCount += 1;
  // });

  // console.log(itemCount);

  // const cartItemCount = document.querySelector(".navbar");

  // cartItemCount.querySelector(".fa-cart-shopping").innerHTML = itemCount;

  return (
    cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`
  )
};
