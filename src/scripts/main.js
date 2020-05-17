import { data1 } from "./products.js";
let data = JSON.parse(data1);

// //////////////VARIABLES///////////
let pizza_options = document.querySelector(".menu_options");
let orders = document.querySelector(".items-no");
let payment = document.querySelector(".payment");
let pizza = document.querySelector(".pizza");
let img;
let icon;
let pizza_name;
let pizza_price;
let pizza_description;
let pizza_item;
let l = 0;
let totalF = 0;
let subtotal = document.querySelector(".subtotal span");
let discount = document.querySelector(".discount span");
let lastTotal = document.querySelector(".last_total span");
let confirm = document.querySelector(".confirm");
let bill_status = document.querySelector(".cart");
let hide_pay = document.querySelector(".hide_pay");
let vegan = document.querySelector(".filter1");
let gluten = document.querySelector(".filter2");
let showAll = document.querySelector(".filter3");

///////////PAGE LOAD FUNCTIO*****
window.addEventListener("load", content);
pizza.addEventListener("click", content);
// ////////////MAIN FUNCTION/////////
function content() {
  pizza_options.innerHTML='';
  for (let i = 0; i < data.length; i++) {
    pizza_options.innerHTML += `<div class="item ">
     <img class="pizza_img" src="${data[i]["image"]}" alt="${data[i]["name"]}" width="90%">
     <i class="fas fa-plus-circle icon"></i>
     <span class="price">$${data[i]["price"]}</span>
     <span class="name">${data[i]["name"]}</span>
     <span class="description">${data[i]["description"]}.</span>
    </div>`;
  }
  /////////////VARIABLE DECLARATION AFTER LOAD THE PAGE
  pizza_item = document.querySelectorAll(".item");
  img = document.querySelectorAll(".pizza_img");
  icon = document.querySelectorAll(".plus");
  pizza_name = document.querySelectorAll(".name");
  pizza_price = document.querySelectorAll(".pice");
  pizza_description = document.querySelectorAll(".description");
  let pizza_detail = document.querySelector(".pizza_detail");

  // //////////////INSERTING EVERY PIZZA ITEM IN TO THE HTML
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
        <span class="choose">Small</span>
        <span class="choose">Medium</span>
        <span class="choose">Large</span>
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
      <button class="pay">Confirm Order</button>
      <button class="go_pay">PAY</button>
    </div>
  </div>`;

      // ////////VARIABLES DECLARATION AFTER INSERTING PIZZA ITEMS////
      let selected = document.querySelectorAll(".choose");
      let pay = document.querySelector(".pay");
      let go_pay = document.querySelector(".go_pay");
      let back_icon = document.querySelector(".fa-arrow-left");
      let quantity = document.querySelector(".sum");
      let minus = document.querySelector(".minus");
      let plus = document.querySelector(".plus");
      let total = document.querySelector(".suma");
      let qt = 1;
      let pric = total.innerHTML;

      // ///////FUNCTION GO BACK TO MAIN PAGE
      back_icon.addEventListener("click", () => {
        if (quantity.innerHTML > 1) {
          alert("Confirm your order before go back");
        } else {
          pizza_options.style.display = "flex";
          pizza_detail.innerHTML = "";
        }
      });

      // ///FUNCTION TO REST QUANTITY OF PIZZA///
      minus.addEventListener("click", () => {
        if (quantity.innerHTML > 1) {
          quantity.innerHTML = parseFloat(quantity.innerHTML) - 1;
          qt--;
          total.innerHTML = (parseFloat(pric) * qt).toFixed(2);
        }
      });

      // ///FUNCTION TO ADD QUANTITY OF PIZZA///
      plus.addEventListener("click", () => {
        if (quantity.innerHTML >= 1) {
          quantity.innerHTML = parseFloat(quantity.innerHTML) + 1;
          qt++;
          total.innerHTML = (parseFloat(pric) * qt).toFixed(2);
        }
      });

      // ///FUNCTION GO TO THE BILL PAGE///
      go_pay.addEventListener("click", () => {
        if (pay.style.cssText == "background-color: rgb(158, 179, 163);") {
          payment.style.display = "flex";
        } else {
          alert("Confirm your order before pay");
        }
      });

      // ///FUNCTION TO CONFIRM ORDER///
      pay.addEventListener("click", last_pay);
      function last_pay() {
        orders.innerHTML =
          parseInt(orders.innerHTML) + parseInt(quantity.innerHTML);
        l = quantity.innerHTML;
        totalF += parseFloat(pric) * qt;
        pay.style.cssText = "background-color: rgb(158, 179, 163);";
        bill();
        quantity.innerHTML = 1;
        qt = 1;
        total.innerHTML = `${data[i]["price"]}`;
      }

      // ///FUNCTION TO CONFIRM ORDER AND INSERT ORDERS IN THE BILL//
      function bill() {
        let orderDetail = document.querySelector(".order_detail");
        orderDetail.innerHTML += `<div><img class="pay_img" src="${data[i]["image"]}" alt="" width="5%" />
        <span class="pay_name">${data[i]["name"]}</span>
        <span class="pay_qt">${l}</span></div>`;
        subtotal.innerHTML = totalF.toFixed(2);
        discount.innerHTML = (totalF * 0.1).toFixed(2);
        lastTotal.innerHTML = (totalF - parseFloat(discount.innerHTML)).toFixed(
          2
        );
      }
      // ////SELECT EXTRAS FOR THE PIZZA
      selected.forEach((element) => {
        element.addEventListener("click", () => {
          if (element.style.backgroundColor == "rgb(248, 110, 110)") {
            element.style.backgroundColor = "rgb(98, 91, 91)";
            total.innerHTML=parseFloat(total.innerHTML)-parseFloat(0.50);
          } else {
            element.style.backgroundColor = "rgb(248, 110, 110)";
            total.innerHTML=parseFloat(total.innerHTML)+parseFloat(0.50);
          }
        });
      });
    });
  });
}

// //////////////PAYMENT CONFIRMATION///////////
confirm.addEventListener("click", () => {
  payment.style.display = "none";
  alert("You order have been paid.");
  location.reload();
});

//////////// DISPLAY ORDER STATUS ... TOP RIGHT CORNER
bill_status.addEventListener("click", () => {
  payment.style.display = "flex";
});

// ////////////////HIDE PAYMENT PAGE
hide_pay.addEventListener("click", () => {
  payment.style.display = "none";
});



// ///////////////////////VEGAN FILTER//////////
vegan.addEventListener("click", () => {
  pizza_options.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i]["type"] == "vegan") {
      pizza_options.innerHTML += `<div class="item ">
     <img class="pizza_img" src="${data[i]["image"]}" alt="${data[i]["name"]}" width="90%">
     <i class="fas fa-plus-circle icon"></i>
     <span class="price">$${data[i]["price"]}</span>
     <span class="name">${data[i]["name"]}</span>
     <span class="description">${data[i]["description"]}.</span>
    </div>`;
    }
  }
});

// ///////////////////////GLUTEN FREE FILTER//////////
gluten.addEventListener("click", () => {
  pizza_options.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i]["type"] == "gluten") {
      pizza_options.innerHTML += `<div class="item ">
     <img class="pizza_img" src="${data[i]["image"]}" alt="${data[i]["name"]}" width="90%">
     <i class="fas fa-plus-circle icon"></i>
     <span class="price">$${data[i]["price"]}</span>
     <span class="name">${data[i]["name"]}</span>
     <span class="description">${data[i]["description"]}.</span>
    </div>`;
    }
  }
});

// ///////////////////////ALL FILTER//////////
showAll.addEventListener("click", () => {
  pizza_options.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    pizza_options.innerHTML += `<div class="item ">
     <img class="pizza_img" src="${data[i]["image"]}" alt="${data[i]["name"]}" width="90%">
     <i class="fas fa-plus-circle icon"></i>
     <span class="price">$${data[i]["price"]}</span>
     <span class="name">${data[i]["name"]}</span>
     <span class="description">${data[i]["description"]}.</span>
    </div>`;
  }
  location.reload();
});
