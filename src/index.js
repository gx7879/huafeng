import "./assets/scss/main.scss";

// function renderList(id) {
//   const targetUl = document.getElementById(id)

//   const svgColor = id === 'list2' ? 'text-white' : 'text-primary'

//   const templateLi = `
//     <li class="flex items-center mt-6">
//       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 stroke-current ${svgColor}" fill="none"
//         viewBox="0 0 24 24" stroke="currentColor">
//         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//           d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
//       </svg>
//       item bla bla bla
//     </li>
//   `

//   let htmlStr = ''
//   for (let index = 0; index < 5; index++) {
//     htmlStr += templateLi
//   }

//   targetUl.innerHTML = htmlStr
// }

// renderList('list1')
// renderList('list2')
// renderList('list3')

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const menuItems = Array.from(menu.querySelectorAll(".menu-item"));

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isHidden = menu.classList.toggle("hidden");
  menuBtn.setAttribute(
    "src",
    isHidden ? "assets/img/icon-menu.png" : "assets/img/icon-close.png"
  );
});

menu.addEventListener("click", (e) => {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1024) return;

  menuItems.forEach((item) => {
    const listItem = item.querySelector("ul");
    if (listItem) {
      listItem.classList.add("hidden");
    }
    item.children[0].classList.add("border-transparent");
    item.classList.remove("text-main-blue");
    item.children[0].classList.remove("border-main-blue");

    if (item.contains(e.target)) {
      listItem.classList.remove("hidden");
      item.classList.add("text-main-blue");
      item.children[0].classList.remove("border-transparent");
      item.children[0].classList.add("border-main-blue");
    }
  });
});

// window.addEventListener('click', function () {

// })
