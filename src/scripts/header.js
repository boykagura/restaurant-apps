
export function headerResponsive(){
const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('nav-items');
    navbar.classList.toggle('active'); 
}
}
 