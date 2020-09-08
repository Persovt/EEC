
const menuHome = document.querySelector(".menu__home")
const menu =document.querySelector(".menu")
const menuMail =document.querySelector(".menu__mail")
const menuTeacher =document.querySelector(".menu__teacher")
const form  = document.querySelector(".form")
const page   = document.querySelector(".page")
const closeBtn = document.querySelector(".close__btn")
/*==========================-INCLUDES-========================== */
  
/*==========================-MAIN-========================== */
menu.addEventListener('click', () => {
  
  menuHome.classList.toggle("menu__visible");
  menuMail.classList.toggle("menu__visible");
  menuTeacher.classList.toggle("menu__visible")
});

menuMail.addEventListener('click', () => {
  form.classList.toggle("hide");
  page.classList.toggle("background-white");
});

closeBtn.addEventListener('click', () => {
  form.classList.add("hide");
  page.classList.remove("background-white")
})
/*==========================-MAIN-========================== */

