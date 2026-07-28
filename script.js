// ======================
// NAVBAR ACTIVE
// ======================

const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
  });
});

// ======================
// SMOOTH SCROLL
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior:"smooth"
      });
    }

  });
});

// ======================
// SCROLL ANIMATION
// ======================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

},{
  threshold:0.15
});

sections.forEach(section=>{

  section.classList.add("hidden");

  observer.observe(section);

});

// ======================
// HERO BUTTON
// ======================

const btn=document.querySelector(".btn");

if(btn){

btn.addEventListener("click",(e)=>{

e.preventDefault();

document.querySelector("#tentang").scrollIntoView({

behavior:"smooth"

});

});

}

// ======================
// NAVBAR BERUBAH SAAT SCROLL
// ======================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

// ======================
// HIGHLIGHT MENU SAAT SCROLL
// ======================

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
