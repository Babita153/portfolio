// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

}

// CLOSE MENU AFTER CLICK
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(
      this.getAttribute("href")
    );
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// ACTIVE NAVBAR LINK
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (
      link.getAttribute("href") === "#" + current
    ) {
      link.classList.add("active");
    }
  });
});

// NAVBAR SHADOW
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow =
      "0 8px 20px rgba(0,0,0,0.12)";
  } else {
    navbar.style.boxShadow =
      "0 2px 10px rgba(0,0,0,0.08)";
  }
});

// SCROLL DOWN BUTTON
const scrollBtn =
  document.querySelector(".scroll-down");
if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    const about =
      document.getElementById("about");
    if (about) {
      about.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}

// REVEAL ANIMATION
const revealItems = document.querySelectorAll(
  ".card, .skill-card, .project-card, .phone-card, .contact-box p"
);
const revealObserver =
  new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform =
            "translateY(0px)";
        }
      });
    },
    {
      threshold: 0.15
    }
  );

revealItems.forEach(item => {
  item.style.opacity = "0";
  item.style.transform =
    "translateY(40px)";
  item.style.transition =
    "all 0.8s ease";
  revealObserver.observe(item);
});

// PROJECT CARD HOVER EFFECT

const projectCards =
  document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform =
      "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "translateY(0px)";
  });
});

// PHONE CARD HOVER EFFECT
const phoneCards =
  document.querySelectorAll(".phone-card");

phoneCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform =
      "translateY(-10px) scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "translateY(0px) scale(1)";
  });
});

// IMAGE FLOAT ANIMATION
const profileImage =
  document.querySelector(".image-circle");

if (profileImage) {
  let position = 0;
  setInterval(() => {
    position += 0.02;
    profileImage.style.transform =
      `translateY(${Math.sin(position) * 8}px)`;
  }, 20);
}

// CONSOLE MESSAGE
console.log(
  "Babita Portfolio Loaded Successfully 🚀"
);
