const titles = ["AI/ML Engineer", "Data Analytics", "Frontend Developer"];

let currentTitle = 0;
let currentChar = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTitles = 1500;

function typeEffect() {
  const textElement = document.getElementById("changing-text");
  const fullText = titles[currentTitle];

  if (!isDeleting) {
    textElement.textContent = fullText.substring(0, currentChar + 1);
    currentChar++;

    if (currentChar === fullText.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenTitles);
      return;
    }
  } else {
    textElement.textContent = fullText.substring(0, currentChar - 1);
    currentChar--;

    if (currentChar === 0) {
      isDeleting = false;
      currentTitle = (currentTitle + 1) % titles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Animation on scroll
const animateElements = document.querySelectorAll(".animate-fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

animateElements.forEach((element) => {
  observer.observe(element);
});

// for nevbar active
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === entry.target.id) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.3 }
  ); // was 0.6, now 0.3

  sections.forEach((section) => observer.observe(section));
});
