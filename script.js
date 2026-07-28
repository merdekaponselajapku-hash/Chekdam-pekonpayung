// Navbar aktif saat diklik
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
  });
});

// Efek muncul saat halaman dibuka
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Tombol Jelajahi Sekarang
const btn = document.querySelector(".btn");

if (btn) {
  btn.addEventListener("click", () => {
    document.querySelector("#tentang").scrollIntoView({
      behavior: "smooth"
    });
  });
}
