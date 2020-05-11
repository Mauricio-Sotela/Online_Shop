import { data1 } from "./products.js";
let data = JSON.parse(data1);

const pizza_options = document.querySelector(".menu_options");
const img = document.querySelector(".pizza_img");
const icon = document.querySelector(".plus");
const pizza_name = document.querySelector(".name");
const pizza_price = document.querySelector(".pice");
const pizza_description = document.querySelector(".description");

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
}
