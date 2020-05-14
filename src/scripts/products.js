const products = [
  {
    name: "Roberto",
    image: "./img/Pizza-round/0.png",
    id: 0,
    type:"gluten",
    price: "13.49",
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
    image: "./img/Pizza-round/1.png",
    id: 1,
    type:"vegan",
    price: "11.99",
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
    image: "./img/Pizza-round/3.png",
    type:"gluten",
    id: 2,
    price: "13.99",
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
    image: "./img/Pizza-round/2.png",
    type:"vegan",
    id: 3,
    price: "12.99",
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
    image: "./img/Pizza-round/4.png",
    type:"gluten",
    id: 4,
    price: "14.99",
    description: [" Ham", " Chared pineapple", " Cheddar", " Jalapeno"],
    info:
      "This delicious pizza is made with the tastiest ingredients: Pizza Sauce, Salami, Cheddar, Jalapeno.",
  },
  {
    name: "Margarita",
    image: "./img/Pizza-round/5.png",
    type:"vegan",
    id: 5,
    price: "15.50",
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
    image: "./img/Pizza-round/0.png",
    type:"guten",
    id: 6,
    price: "14.99",
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
    image: "./img/Pizza-round/1.png",
    type:"vegan",
    id: 7,
    price: "10.99",
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
    image: "./img/Pizza-round/3.png",
    type:"gluten",
    id: 8,
    price: "14.99",
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

let data1 = JSON.stringify(products);
export { data1 };