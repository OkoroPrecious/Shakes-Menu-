const listOfMenu = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    catergory: "breakfast",
    title: "food",
    price: 15.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa illum veniam repudiandae asperiores magni, reprehenderit possimus omnis eius culpa molestias tempora error, eum, deleniti cumque tenetur cupiditate fugiat expedita",
  },
  {
    id: 1,
    img: "https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    catergory: "breakfast",
    price: 15.99,
    title: "food",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa illum veniam repudiandae asperiores magni, reprehenderit possimus omnis eius culpa molestias tempora error, eum, deleniti cumque tenetur cupiditate fugiat expedita",
  },
  {
    id: 1,
    img: "https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    catergory: "breakfast",
    price: 15.99,
    title: "food",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa illum veniam repudiandae asperiores magni, reprehenderit possimus omnis eius culpa molestias tempora error, eum, deleniti cumque tenetur cupiditate fugiat expedita",
  },
  {
    id: 1,
    img: "https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    catergory: "breakfast",
    price: 15.99,
    title: "food",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa illum veniam repudiandae asperiores magni, reprehenderit possimus omnis eius culpa molestias tempora error, eum, deleniti cumque tenetur cupiditate fugiat expedita",
  },
];

const sectionCenter = document.querySelector(".item");

window.addEventListener("DOMContentLoaded", function () {
  displayListOfMenuFunc(listOfMenu);
});

function displayListOfMenuFunc(listOfMenu) {
  let displayListOfMenu = listOfMenu.map(function (oneItem) {
    return `<article>
            <img
              src=${oneItem.img}
              class="image"
              alt=${oneItem.title}
            />
            <div>
              <header class="head">
                <h4>${oneItem.title}</h4>
                <h4>${oneItem.price}</h4>
              </header>
              <hr class="head-hr">
              <p class="text">
               ${oneItem.desc}
              </p>
            </div>
          </article>`;
  });
  displayListOfMenu = displayListOfMenu.join("");
  sectionCenter.innerHTML = displayListOfMenu;
}
