import { data1 } from "./products.js";
let data = JSON.parse(data1);

let pizza_options = document.querySelector(".menu_options");
let orders = document.querySelector(".items-no");
let payment = document.querySelector(".payment");
let img;
let icon;
let pizza_name;
let pizza_price;
let pizza_description;
let pizza_item;

window.addEventListener("load", content);

function content() {
  for (let i = 0; i < data.length; i++) {
    pizza_options.innerHTML += `<div class="item ">
     <img class="pizza_img" src="${data[i]["image"]}" alt="${data[i]["name"]}" width="90%">
     <i class="fas fa-plus-circle icon"></i>
     <span class="price">$${data[i]["price"]}</span>
     <span class="name">${data[i]["name"]}</span>
     <span class="description">${data[i]["description"]}.</span>
    </div>`;
  }
  pizza_item = document.querySelectorAll(".item");
  img = document.querySelectorAll(".pizza_img");
  icon = document.querySelectorAll(".plus");
  pizza_name = document.querySelectorAll(".name");
  pizza_price = document.querySelectorAll(".pice");
  pizza_description = document.querySelectorAll(".description");

  let pizza_detail = document.querySelector(".pizza_detail");
  pizza_item.forEach((item, i) => {
    item.addEventListener("click", function pizzaDetail() {
      pizza_options.style.display = "none";
      pizza_detail.innerHTML = "";

      pizza_detail.innerHTML = ` <div class="pizza_det">
    <div class="one">
      <i class="fas fa-arrow-left"> Back to menu</i>
      <img src="${data[i]["image"]}" alt="${data[i]["name"]}" width="30%" />
    </div>
    <div class="two">
      <div class="pizza_name">${data[i]["name"]}</div>
      <div class="pizza_description">${data[i]["info"]}</div>
      <p class="pizza_size">Size:
        <span>Small</span>
        <span>Medium</span>
        <span>Large</span>
      </p>
      <p class="options"> Options:
        <span class="choose">Onions</span>
        <span class="choose">Garlic</span>
        <span class="choose">Jalapenos</span>
        <span class="choose">Salami</span>
        <span class="choose">Mozzarella</span>
      </p>
      <p class="total">
        <span class="suma">${data[i]["price"]}</span>
        <span>
          <span class="minus"><i class="fas fa-minus-circle"></i></span>
          <span class="sum">1</span>
          <span class="plus"><i class="fas fa-plus-circle"></i></span>
        </span>
      </p>
      <button class="pay">Add to Cart</button>
      <button class="go_pay">PAY</button>
    </div>
  </div>`;
      let pay = document.querySelector(".pay");
      let go_pay = document.querySelector(".go_pay");
      let back_icon = document.querySelector(".fa-arrow-left");
      let quantity = document.querySelector(".sum");
      let minus = document.querySelector(".minus");
      let plus = document.querySelector(".plus");
      let total = document.querySelector(".suma");
      let qt = 1;
      let pric = total.innerHTML;

      back_icon.addEventListener("click", () => {
        if (quantity.innerHTML > 1) {
          alert("Confirm your order before go back");
        } else {
          pizza_options.style.display = "flex";
          pizza_detail.innerHTML = "";
        }
      });
      minus.addEventListener("click", () => {
        if (quantity.innerHTML > 1) {
          quantity.innerHTML = parseFloat(quantity.innerHTML) - 1;
          qt--;
          total.innerHTML = parseFloat(pric) * qt;
        }
      });
      plus.addEventListener("click", () => {
        if (quantity.innerHTML >= 1) {
          quantity.innerHTML = parseFloat(quantity.innerHTML) + 1;
          qt++;
          total.innerHTML = parseFloat(pric) * qt;
        }
      });
      go_pay.addEventListener("click", () => {
        if (pay.style.cssText == "background-color: rgb(158, 179, 163);") {
          payment.style.display = "flex";
        } else {
          alert("Confirm your order before pay");
        }
      });
      pay.addEventListener("click", last_pay);

      function last_pay() {
        orders.innerHTML = parseInt(orders.innerHTML) + 1;
        total.innerHTML = parseFloat(pric);
        quantity.innerHTML = 1;
        pay.style.cssText = "background-color: rgb(158, 179, 163);";
      }
    });
  });
}
