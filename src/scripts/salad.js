const salads = [
    {
      name: "Roberto",
      image: "./img/salad/01.png",
      id: 0,
      type:"gluten",
      price: "6.49",
      description: [
        " Roast beef",
        " Bell peppers ",
        " Mushrooms",
        " Onions",
        " Tomatoes",
        " Marinara",
      ],
      info:
  
        " This delicious pizza is made for you from the tastiest ingredients: Roast beef, Bell peppers, Mushrooms, Onions, Tomatoes, Marinara.",
    },
    {
      name: "Luigi",
      image: "./img/salad/02.png",
      id: 1,
      type:"vegan",
      price: "5.99",
      description: [
        " Jamon",
        "  Bell peppers",
        " Pepperocini",
        " Olives",
        " Mozzarella",
        " Gouda",
        " Marinara",
      ],
      info:
        "This delicious pizza is made for you from the tastiest ingredients: Jamon, Bell peppers, Pepperoncini, Olives, Mozzarella, Gouda, Marinara.",
    },
    {
      name: "Four Meat",
      image: "./img/salad/03.png",
      type:"gluten",
      id: 2,
      price: "5.99",
      description: [
        " Ham",
        " Pizza sauce",
        " Chared pineapple",
        " Cheddar",
        " Jalapeno",
      ],
      info:
        " This delicious pizza is made for you from the tastiest ingredients: Ham, Pizza sauce, Chared pineapple, Cheddar, Jalapeno.",
    },
    {
      name: "Marinara",
      image: "./img/salad/04.png",
      type:"vegan",
      id: 3,
      price: "4.99",
      description: [
        " Ham",
        " Pizza sauce",
        " Chared pineapple",
        " Cheddar",
        " Jalapeno",
      ],
      info:
        " This delicious pizza is made for you from the tastiest ingredients: Ham, Pizza sauce, Chared pineapple, Cheddar, Jalapeno.",
    },
    {
      name: "Anchovy",
      image: "./img/salad/05.png",
      type:"gluten",
      id: 4,
      price: "6.99",
      description: [" Ham", " Chared pineapple", " Cheddar", " Jalapeno"],
      info:
        "This delicious pizza is made with the tastiest ingredients: Pizza Sauce, Salami, Cheddar, Jalapeno.",
    },
    {
      name: "Margarita",
      image: "./img/salad/06.png",
      type:"vegan",
      id: 5,
      price: "6.50",
      description: [
        " Tomatoes",
        " Pizza sauce",
        " Basil",
        " Cheddar",
        " Jalapeno",
      ],
      info:
        " This delicious pizza is made with the tastiest ingredients: Pizza Sauce, Cheese, Jalapeno.",
    },
    {
      name: "Seafood",
      image: "./img/salad/07.png",
      type:"guten",
      id: 6,
      price: "5.99",
      description: [
        " omatoes",
        " Pizza sauce",
        " Calamari",
        " Cheddar",
        " Jalapeno",
      ],
      info:
        " This delicious pizza is made with the tastiest ingredients: Tomatoes, Pizza Sauce, Salami, Cheddar, Jalapeno.",
    },
        {
      name: "Veggie",
      image: "./img/salad/04.png",
      type:"vegan",
      id: 7,
      price: "7.99",
      description: [
        " Tomatoes",
        " Pizza sauce",
        " Chared pineapple",
        " Cheddar",
        " Jalapeno",
        " Eggplant",
      ],
      info:
        " This delicious pizza is made with the tastiest ingredients: Tomatoes, Pizza sauce, Chared pineapple, jalapeno, Eggplant.",
    },
    {
      name: "Cabanossi",
      image: "./img/salad/06.png",
      type:"gluten",
      id: 8,
      price: "4.99",
      description: [
        " Tomato",
        " Kabana",
        " Garlic oil",
        " Onions",
        " Mozzarella",
      ],
      info:
        " This delicious pizza is made with the tastiest ingredients: Tomatoes, Kabana, Garlic oil, Onions, Mozzarella.",
    },
  ];
  

let salad=document.querySelector('.salads');
let pizza_options = document.querySelector(".menu_options");
salad.addEventListener('click',()=>{
    pizza_options.innerHTML='';
    for (let i = 0; i < salads.length; i++) {
        pizza_options.innerHTML += `<div class="item ">
     <img class="pizza_img" src="${salads[i]["image"]}" alt="${salads[i]["name"]}" width="90%">
     <i class="fas fa-plus-circle icon"></i>
     <span class="price">$${salads[i]["price"]}</span>
     <span class="name">${salads[i]["name"]}</span>
     <span class="description">${salads[i]["info"]}.</span>
    </div>`;
        
    }
})
