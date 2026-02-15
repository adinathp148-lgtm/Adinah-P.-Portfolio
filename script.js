const typingText = document.getElementById("typing-text");
const text = "MCA  | Data Analyst with Python";

let index = 0;
function type() {
  if (index < text.length) {
    typingText.textContent += text[index];
    index++;
    setTimeout(type, 80);
  }
}
type();

// Smooth scroll + highlight active nav item
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    const element = document.querySelector(id);
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: "smooth"
    });
    setActiveNav(link);
  });
});

function setActiveNav(activeLink) {
  navLinks.forEach(link => link.classList.remove("active"));
  activeLink.classList.add("active");
}

// Simple scroll animation for sections
function handleScrollAnimation() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight * 0.8) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    } else {
      section.style.opacity = "0";
      section.style.transform = "translateY(40px)";
    }
  });
}

sections.forEach(section => {
  section.style.transition = "all 0.8s ease";
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);
js
