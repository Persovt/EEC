
const menuHome = document.querySelector(".menu__home")
const menu =document.querySelector(".menu")
const menuMail =document.querySelector(".menu__mail")
const menuTeacher =document.querySelector(".menu__teacher")
/*==========================-INCLUDES-========================== */
  
/*==========================-MAIN-========================== */
menu.addEventListener('click', () => {
  menuHome.classList.toggle("menu__visible")
  menuMail.classList.toggle("menu__visible")
  menuTeacher.classList.toggle("menu__visible")
})
/*==========================-MAIN-========================== */

