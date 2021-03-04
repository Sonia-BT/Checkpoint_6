if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let carts = document.querySelectorAll(".addcart");
  let Nb_add_carts = 0;
  for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
      Nb_add_carts += 1;
      document.querySelector(".Cart span").textContent = Nb_add_carts;
    });
  }

  /***************************************Shooping Cart Page***********************************************/
  /*Remove Cart and change total and quantity of item*/
  let removeItem = document.getElementsByClassName("btn-danger ");
  for (let i = 0; i < removeItem.length; i++) {
    let button = removeItem[i];
    button.addEventListener("click", removeCartItem);
  }

  let quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantitychanged);
  }

  /*Add Cart */
  let AddItem = document.getElementsByClassName("addcart");
  for (let i = 0; i < AddItem.length; i++) {
    let Add = AddItem[i].addEventListener("click", AddCartClick);
  }

  function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateTotal();
  }

  function quantitychanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateTotal();
  }

  function AddCartClick(event) {
    let Item = event.target;
    let Item_bloc = Item.parentElement;
  }

  function updateTotal() {
    let cartItem = document.getElementsByClassName("cart-items")[0];
    let cartRows = cartItem.getElementsByClassName("cart-row");
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
      let cartRow = cartRows[i];
      let priceItem = cartRow.getElementsByClassName("cart-price")[0];
      let QuantityItem = cartRow.getElementsByClassName(
        "cart-quantity-input"
      )[0];
      console.log(priceItem, QuantityItem);
      let price = parseFloat(priceItem.innerText.replace("DA", ""));
      let quantity = QuantityItem.value;
      total += price * quantity;
    }
    document.getElementsByClassName("cart-total-price")[0].innerText =
      total + " DA";
  }

  /*Likes*/
  let likes = document.querySelectorAll(".btn-like");
  console.log(likes);
  let Nb_likes = 0;
  for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click", () => {
      likes[i].style.backgroundColor = "white";
      like = likes[i].style.color = "#cc4c4c";
      Nb_likes += 1;
      document.querySelector(".Likes span").textContent = Nb_likes;
    });
  }
}
