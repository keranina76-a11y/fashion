/* ======================================
   KERANINA FASHION
   JavaScript v1.0
====================================== */

// Navbar berubah saat scroll
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.classList.add("shadow");

        navbar.style.padding = "10px 0";

        navbar.style.transition = ".3s";

    } else {

        navbar.classList.remove("shadow");

        navbar.style.padding = "18px 0";

    }

});

// ================================
// Back To Top
// ================================

const backTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {

    if (!backTop) return;

    if (window.scrollY > 400) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

if(backTop){

backTop.addEventListener("click", function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// ================================
// Animasi Card
// ================================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

},{

threshold:0.2

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".8s";

observer.observe(card);

});

// ================================
// Efek Hover Produk
// ================================

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

// ================================
// Counter
// ================================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");

const c=+counter.innerText;

const increment=target/100;

if(c<target){

counter.innerText=`${Math.ceil(c+increment)}`;

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});

// ================================
// Loading
// ================================

window.onload=function(){

document.body.classList.add("loaded");

};

// ================================
// Copyright
// ================================

console.log("Keranina Fashion Website Loaded");