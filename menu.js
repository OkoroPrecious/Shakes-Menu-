const listOfMenu = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    catergory: "breakfast",
    title: "food",
    price: 25.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa illum veniam repudiandae asperiores magni, reprehenderit possimus omnis eius culpa molestias tempora error, eum, deleniti cumque tenetur cupiditate fugiat expedita",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/660282/pexels-photo-660282.jpeg?auto=compress&cs=tinysrgb&w=600",
    catergory: "breakfast",
    price: 35.99,
    title: "lorem",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa illum veniam repudiandae asperiores magni, reprehenderit possimus omnis eius culpa molestias tempora error, eum, deleniti cumque tenetur cupiditate fugiat expedita",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/6210951/pexels-photo-6210951.jpeg?auto=compress&cs=tinysrgb&w=600",
    catergory: "breakfast",
    price: 12.99,
    title: "loremx",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa illum veniam repudiandae asperiores magni, reprehenderit possimus omnis eius culpa molestias tempora error, eum, deleniti cumque tenetur cupiditate fugiat expedita",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/4101805/pexels-photo-4101805.jpeg?auto=compress&cs=tinysrgb&w=600",
    catergory: "breakfast",
    price: 10.99,
    title: "loremxy",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa illum veniam repudiandae asperiores magni, reprehenderit possimus omnis eius culpa molestias tempora error, eum, deleniti cumque tenetur cupiditate fugiat expedita",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/7758254/pexels-photo-7758254.jpeg?auto=compress&cs=tinysrgb&w=600",
    catergory: "breakfast",
    price: 25.99,
    title: "loremxyz",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa illum veniam repudiandae asperiores magni, reprehenderit possimus omnis eius culpa molestias tempora error, eum, deleniti cumque tenetur cupiditate fugiat expedita",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/4637735/pexels-photo-4637735.jpeg?auto=compress&cs=tinysrgb&w=600",
    catergory: "breakfast",
    price: 8.99,
    title: "loremz",
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
                <h4>$${oneItem.price}</h4>
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
