const drinks = [
    {
      name: "Roberto",
      image: "./img/drinks/01.png",
      id: 0,
      type:"gluten",
      price: "3.50",
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
      image: "./img/drinks/02.png",
      id: 1,
      type:"vegan",
      price: "2.50",
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
      image: "./img/drinks/03.png",
      type:"gluten",
      id: 2,
      price: "4.50",
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
      image: "./img/drinks/04.png",
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
      image: "./img/drinks/05.png",
      type:"gluten",
      id: 4,
      price: "6.99",
      description: [" Ham", " Chared pineapple", " Cheddar", " Jalapeno"],
      info:
        "This delicious pizza is made with the tastiest ingredients: Pizza Sauce, Salami, Cheddar, Jalapeno.",
    },
    {
      name: "Margarita",
      image: "./img/drinks/06.png",
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
      image: "./img/drinks/07.png",
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
      image: "./img/drinks/08.png",
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
      image: "./img/drinks/09.png",
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
  

let drink=document.querySelector('.drinks');
drink.addEventListener('click',()=>{
    pizza_options.innerHTML='';
    for (let i = 0; i < drinks.length; i++) {
        pizza_options.innerHTML += `<div class="item ">
     <img class="pizza_img" src="${drinks[i]["image"]}" alt="${drinks[i]["name"]}" width="90%">
     <i class="fas fa-plus-circle icon"></i>
     <span class="price">$${drinks[i]["price"]}</span>
     <span class="name">${drinks[i]["name"]}</span>
     <span class="description">${drinks[i]["description"]}.</span>
    </div>`;
        
    }
})
