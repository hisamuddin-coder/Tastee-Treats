const menuItems = [
  {
    id: 1,
    img: "/images/item-1.jpeg",
    name: "Avocado Toast",
    price: 8.99,
    category: "breakfast",
    ingredients: ["Avocado", "Toast", "Olive Oil", "Salt", "Pepper"],
  },
  {
    id: 2,
    img: "/images/item-2.jpeg",
    name: "Pancakes",
    price: 7.49,
    category: "breakfast",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Maple Syrup"],
  },
  {
    id: 3,
    img: "/images/item-3.jpeg",
    name: "Smoothie Bowl",
    price: 9.99,
    category: "breakfast",
    ingredients: ["Banana", "Berries", "Yogurt", "Granola", "Honey"],
  },
  {
    id: 4,
    img: "/images/item-4.jpeg",
    name: "Egg Benedict",
    price: 11.49,
    category: "breakfast",
    ingredients: ["English Muffin", "Eggs", "Ham", "Hollandaise Sauce"],
  },
  {
    id: 5,
    img: "/images/item-5.jpeg",
    name: "French Toast",
    price: 8.99,
    category: "breakfast",
    ingredients: ["Bread", "Eggs", "Milk", "Cinnamon", "Maple Syrup"],
  },
  {
    id: 6,
    img: "/images/item-6.jpeg",
    name: "Omelette",
    price: 6.99,
    category: "breakfast",
    ingredients: ["Eggs", "Cheese", "Bell Peppers", "Onions", "Salt"],
  },
  {
    id: 7,
    img: "/images/item-7.jpeg",
    name: "Caesar Salad",
    price: 10.49,
    category: "starter",
    ingredients: [
      "Romaine Lettuce",
      "Croutons",
      "Parmesan Cheese",
      "Caesar Dressing",
    ],
  },
  {
    id: 8,
    img: "/images/item-8.jpeg",
    name: "Bruschetta",
    price: 6.99,
    category: "starter",
    ingredients: ["Tomatoes", "Basil", "Garlic", "Olive Oil", "Baguette"],
  },
  {
    id: 9,
    img: "/images/item-9.jpeg",
    name: "Stuffed Mushrooms",
    price: 8.49,
    category: "starter",
    ingredients: ["Mushrooms", "Cream Cheese", "Garlic", "Parmesan", "Parsley"],
  },
  {
    id: 9,
    img: "/images/item-9.jpeg",
    name: "Garlic Bread",
    price: 5.99,
    category: "starter",
    ingredients: ["Baguette", "Garlic", "Butter", "Parsley", "Parmesan"],
  },
  {
    id: 10,
    img: "/images/item-10.jpeg",
    name: "Caprese Salad",
    price: 9.49,
    category: "starter",
    ingredients: [
      "Tomatoes",
      "Mozzarella",
      "Basil",
      "Olive Oil",
      "Balsamic Glaze",
    ],
  },
  {
    id: 11,
    img: "/images/item-11.jpeg",
    name: "Spring Rolls",
    price: 7.99,
    category: "starter",
    ingredients: ["Rice Paper", "Shrimp", "Lettuce", "Carrots", "Mint"],
  },
  {
    id: 12,
    img: "/images/item-12.jpeg",
    name: "Grilled Chicken Sandwich",
    price: 12.99,
    category: "lunch",
    ingredients: ["Chicken Breast", "Lettuce", "Tomato", "Mayo", "Bun"],
  },
  {
    id: 13,
    img: "/images/item-13.jpeg",
    name: "Turkey Wrap",
    price: 10.99,
    category: "lunch",
    ingredients: ["Turkey", "Lettuce", "Tomato", "Cheese", "Wrap"],
  },
  {
    id: 14,
    img: "/images/item-14.jpeg",
    name: "Quinoa Salad",
    price: 11.99,
    category: "lunch",
    ingredients: ["Quinoa", "Cucumber", "Tomato", "Feta Cheese", "Olive Oil"],
  },
  {
    id: 15,
    img: "/images/item-15.jpeg",
    name: "Veggie Burger",
    price: 9.99,
    category: "lunch",
    ingredients: ["Veggie Patty", "Lettuce", "Tomato", "Pickles", "Bun"],
  },
  {
    id: 16,
    img: "/images/item-16.jpeg",
    name: "Chicken Caesar Wrap",
    price: 10.49,
    category: "lunch",
    ingredients: [
      "Chicken",
      "Romaine Lettuce",
      "Caesar Dressing",
      "Parmesan",
      "Wrap",
    ],
  },
  {
    id: 17,
    img: "/images/item-17.jpeg",
    name: "BLT Sandwich",
    price: 8.99,
    category: "lunch",
    ingredients: ["Bacon", "Lettuce", "Tomato", "Mayo", "Bread"],
  },
  {
    id: 18,
    img: "/images/item-18.jpeg",
    name: "Grilled Salmon",
    price: 18.99,
    category: "dinner",
    ingredients: ["Salmon", "Lemon", "Garlic", "Olive Oil", "Herbs"],
  },
  {
    id: 19,
    img: "/images/item-19.jpeg",
    name: "Steak Frites",
    price: 22.99,
    category: "dinner",
    ingredients: ["Steak", "Potatoes", "Garlic", "Butter", "Parsley"],
  },
  {
    id: 20,
    img: "/images/item-20.jpeg",
    name: "Spaghetti Carbonara",
    price: 14.99,
    category: "dinner",
    ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan", "Black Pepper"],
  },
  {
    id: 21,
    img: "/images/item-21.jpeg",
    name: "Chicken Alfredo",
    price: 13.99,
    category: "dinner",
    ingredients: ["Fettuccine", "Chicken", "Cream", "Parmesan", "Garlic"],
  },
  {
    id: 22,
    img: "/images/item-22.jpeg",
    name: "Shrimp Scampi",
    price: 19.99,
    category: "dinner",
    ingredients: ["Shrimp", "Garlic", "Butter", "White Wine", "Parsley"],
  },
  {
    id: 23,
    img: "/images/item-23.jpeg",
    name: "Beef Stroganoff",
    price: 17.49,
    category: "dinner",
    ingredients: ["Beef", "Mushrooms", "Onions", "Sour Cream", "Egg Noodles"],
  },
  {
    id: 24,
    img: "/images/item-24.jpeg",
    name: "Tacos",
    price: 12.49,
    category: "dinner",
    ingredients: ["Tortillas", "Beef", "Lettuce", "Cheese", "Salsa"],
  },
  {
    id: 25,
    img: "/images/item-25.jpeg",
    name: "Pizza Margherita",
    price: 11.99,
    category: "dinner",
    ingredients: [
      "Pizza Dough",
      "Tomato Sauce",
      "Mozzarella",
      "Basil",
      "Olive Oil",
    ],
  },
  {
    id: 26,
    img: "/images/item-27.jpeg",
    name: "Lamb Chops",
    price: 24.99,
    category: "dinner",
    ingredients: ["Lamb", "Garlic", "Rosemary", "Olive Oil", "Salt"],
  },
  {
    id: 28,
    img: "/images/item-28.jpeg",
    name: "BBQ Ribs",
    price: 21.99,
    category: "dinner",
    ingredients: ["Pork Ribs", "BBQ Sauce", "Garlic", "Onion", "Brown Sugar"],
  },
  {
    id: 29,
    img: "/images/item-29.jpeg",
    name: "Chicken Parmesan",
    price: 15.99,
    category: "dinner",
    ingredients: [
      "Chicken",
      "Tomato Sauce",
      "Mozzarella",
      "Parmesan",
      "Breadcrumbs",
    ],
  },
  {
    id: 30,
    img: "/images/item-30.jpeg",
    name: "Lasagna",
    price: 13.99,
    category: "dinner",
    ingredients: [
      "Lasagna Noodles",
      "Ground Beef",
      "Ricotta",
      "Tomato Sauce",
      "Mozzarella",
    ],
  },
];
// =========== NAVBAR ===================
const navToggle = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".nav-links-container");

navToggle.addEventListener("click", () => {
  linkContainer.classList.toggle("show-links");
  navToggle.classList.toggle("close");
});
// =========== STATS ===================
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-count");
  const speed = 300;

  counters.forEach((counter) => {
    function updateCount() {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const increment = +target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    }
    updateCount();
  });
});

const btnContainer = document.querySelector(".filter-btn-container");
const filterBtns = document.querySelectorAll(".filter-btn");
const menuContainer = document.querySelector(".menu-items");

// Load Items
document.addEventListener("DOMContentLoaded", () => {
  filterMenu("starter");
  // Add click event listeners to filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-id");
      filterMenu(category);
      updateActiveButton(btn);
    });
  });
});
// Functions
function displayMenuItems(items) {
  let displayMenu = items.map(
    (item) => ` <figure class="menu-item">
              <img src=${item.img} alt=${item.name} />
              <figcaption class="menu-item-desc">
                <h5 class="menu-item-name">${item.name}</h5>
                <p class="menu-item-ingredients">
                  <em>${item.ingredients}</em>
                </p>
                <span class="menu-item-price">$${item.price}</span>
              </figcaption>
            </figure>`
  );
  displayMenu = displayMenu.join("");
  menuContainer.innerHTML = displayMenu;
}
function filterMenu(category) {
  const filteredItems = menuItems.filter((item) => item.category === category);
  displayMenuItems(filteredItems);
}
function updateActiveButton(activeButton) {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  activeButton.classList.add("active");
}
// TESTIMONIALS
const slides = document.querySelectorAll(".testimonial-slide");
const btnPrev = document.querySelector(".slider-btn-prev");
const btnNext = document.querySelector(".slider-btn-next");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;

btnNext.addEventListener("click", function () {
  if (counter < slides.length - 1) {
    counter++;
    slider();
  }
});
btnPrev.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    slider();
  }
});

function slider() {
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
