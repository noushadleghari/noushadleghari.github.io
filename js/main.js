// ==========================================================
// Noushad Ali - Portfolio
// Theme toggle, mobile menu, typing effect, scroll effects.
// ==========================================================

const root = document.documentElement;
const header = document.querySelector(".header");
const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// ---------- Dark / light theme ----------
// The starting theme is set by a small script in <head> to avoid a flash.
function updateThemeIcon() {
  const icon = themeToggle.querySelector("i");
  const isDark = root.dataset.theme === "dark";
  icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", root.dataset.theme);
  updateThemeIcon();
});

updateThemeIcon();

// ---------- Mobile menu ----------
function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.querySelector("i").className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}

menuToggle.addEventListener("click", () => {
  setMenu(!navLinks.classList.contains("open"));
});

// Close the menu after a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// ---------- Typing effect in the hero ----------
const roles = ["Full Stack Developer", "Software Engineer", "Laravel Developer", "Automation Developer", "Problem Solver"];
const typedRole = document.getElementById("typed-role");
let roleIndex = 0;
let charIndex = roles[0].length; // first role is already in the HTML
let deleting = true;

function typeLoop() {
  const word = roles[roleIndex];
  typedRole.textContent = word.slice(0, charIndex);

  let delay = deleting ? 50 : 100;

  if (!deleting && charIndex === word.length) {
    // finished typing: pause, then start deleting
    deleting = true;
    delay = 1800;
  } else if (deleting && charIndex === 0) {
    // finished deleting: move to the next role
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  } else {
    charIndex += deleting ? -1 : 1;
  }

  setTimeout(typeLoop, delay);
}

// Respect users who turn off animations
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setTimeout(typeLoop, 1800);
}

// ---------- Header border on scroll ----------
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

// ---------- Highlight the nav link of the section in view ----------
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.querySelectorAll("a").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  },
  { rootMargin: "-50% 0px -50% 0px" } // active when the section crosses the middle of the screen
);

document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

// ---------- Reveal elements on scroll ----------
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
