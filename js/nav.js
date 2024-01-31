//navbar logic
const mobileMenuBtn = document.getElementById("mobile-menu");
const mobileNavMenu = document.querySelector(".nav-links");
const mobileMenuCloseBtn = document.getElementById("close-btn");

if(mobileMenuBtn){
  mobileMenuBtn.addEventListener("click",function(){
    mobileNavMenu.classList.add("active");
  })
}
mobileMenuCloseBtn.addEventListener("click",function(){
  mobileNavMenu.classList.remove("active");
})