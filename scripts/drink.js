const drinks = [
    {
      name: "Beer",
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
  
        "Drink",
    },
    {
      name: "Cola",
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
        "Drink",
    },
    {
      name: "Natural Juice",
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
        " Drink",
    },
    {
      name: "Cocktail",
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
        " Drink",
    },
    {
      name: "Wine",
      image: "./img/drinks/05.png",
      type:"gluten",
      id: 4,
      price: "6.99",
      description: [" Ham", " Chared pineapple", " Cheddar", " Jalapeno"],
      info:
        "Drink",
    },
    {
      name: "Tea",
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
        " Drink",
    },
    {
      name: "Coffee",
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
        " Drink",
    },
        {
      name: "Smoothie",
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
        " Drink",
    },
    {
      name: "Homemade Drink",
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
        "Drink",
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
     <span class="description">${drinks[i]["info"]}.</span>
    </div>`;
        
    }
})
