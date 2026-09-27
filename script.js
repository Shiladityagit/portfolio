const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("research-theme",
    document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("research-theme") === "dark") {
  document.body.classList.add("dark");
}

const items = document.querySelectorAll(".research-card,.pub,.work-row,.timeline-list>div");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.08});

items.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(18px)";
  item.style.transition = "opacity .65s ease, transform .65s ease";
  observer.observe(item);
});

document.addEventListener("scroll", () => {
  document.querySelectorAll(".visible").forEach(item => {
    item.style.opacity = "1";
    item.style.transform = "translateY(0)";
  });
}, {passive:true});
