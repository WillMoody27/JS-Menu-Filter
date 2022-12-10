// Data Array of Objects
const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    img: "./assets/images/",
    category: "breakfast",
    price: 15.99,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit....[]",
  },
  {
    id: 2,
    title: "Dinner Special",
    img: "./assets/images/",
    category: "lunch",
    price: 15.99,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit....[]",
  },
  {
    id: 3,
    title: "Steak & Eggs",
    img: "./assets/images/",
    category: "breakfast",
    price: 19.99,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit....[]",
  },
  {
    id: 4,
    title: "Classic Oreo Milkshakes",
    img: "./assets/images/",
    category: "shakes",
    price: 7.99,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit....[]",
  },
  {
    id: 5,
    title: "Steak Deluxe Dinner",
    img: "./assets/images/",
    category: "dinner",
    price: 39.99,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit....[]",
  },
];

const sectionCenter = document.querySelector(".section-center");
// Button Container
const btnContainer = document.querySelector(".btn-container");

// Load Items
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuBtns(menu);
});

let displayMenuItems = (menuItems) => {
  let displayMenu = menuItems
    .map((item) => {
      return `<article class="menu-item">
                <img  class="menu-image" src=${item.img} alt=${item.title} />
                <div class="item-info">
                    <header>
                        <h4 class="menu-title">${item.title}</h4>
                        <h4 class="price">Price: ${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`;
    })
    .join("");
  sectionCenter.innerHTML = displayMenu;
};

let displayMenuBtns = () => {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtn = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtn;

  // Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        if (category === menuItem.category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
};
