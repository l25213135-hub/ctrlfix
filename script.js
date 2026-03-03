window.addEventListener("scroll", function(){

// Scroll Top Button
let scrollBtn = document.querySelector(".scroll-top");

if(window.scrollY > 300){
scrollBtn.style.display = "block";
}else{
scrollBtn.style.display = "none";
}

// Reveal animation
const reveals = document.querySelectorAll(".reveal");

reveals.forEach(element => {
const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;
const visible = 100;

if(elementTop < windowHeight - visible){
element.classList.add("active");
}
});

});

// Scroll to top function
function scrollToTop(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}
