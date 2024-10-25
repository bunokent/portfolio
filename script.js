const menuBtn = document.getElementById("menu");
const menuIcon = document.querySelector("#menu i");
const menuContent = document.querySelector("#home header ul");

let degree = 180;

menuBtn.addEventListener("click", function () {
  if (menuIcon.classList.contains("fa-bars")) {
    menuContent.classList.add("active");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuContent.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
  menuBtn.style.transform = `rotate(${degree}deg)`;
  degree = degree == 180 ? 0 : 180;
});

const tabBtns = document.querySelectorAll(".tabs-btn-container button");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const dataTab = btn.getAttribute("data-tab");

    tabContents.forEach((content) => {
      content.classList.remove("active");
    });

    tabBtns.forEach((button) => {
      button.classList.remove("active");
    });

    document.getElementById(dataTab).classList.add("active");
    btn.classList.add("active");
  });
});

const favBtns = document.querySelectorAll(".fav-btns-container button");
const favContents = document.querySelectorAll(".fav-content");

favBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const dataTab = btn.getAttribute("data-fav");

    favContents.forEach((content) => {
      content.classList.remove("active");
    });

    favBtns.forEach((button) => {
      button.classList.remove("active");
    });

    document.getElementById(dataTab).classList.add("active");
    btn.classList.add("active");
  });
});

const navLinks = document.querySelectorAll("#home header ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    link.classList.add("active");
  });
});

const sections = document.querySelectorAll("section");

const isMobile = window.innerWidth < 768;
observerOptions = {
  threshold: isMobile ? 0.4 : 0.75,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    console.log(window.innerWidth);
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        if (link.getAttribute("data-link") == id) link.classList.add("active");
        else link.classList.remove("active");
      });
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});
