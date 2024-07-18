let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

//toggle selection
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  section.forEach((sec) => {
    section.forEach((sec) => {
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          document
            .querySelector(`header .navbar a[href*="${id}"]`)
            .classList.add("active");
        });
      }
    });
  });
};

// search section
document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

// img slide swiper

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

//leader part

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function FadeOut() {
  setTimeout(loader, 2000); // Use setTimeout instead of setInterval
}

window.onload = FadeOut;
