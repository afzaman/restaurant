import menu from './menu'
import contact from './contact'
import locations from './locations'
import careers from './careers'

window.onload = menu();

//Get all tabs from navbar.
let navbar = document.querySelectorAll('.nav-link');

//Add an onclick event that will render each module.
navbar.forEach(navLink => {
    //Add Event Listener
    navLink.addEventListener("click", (e) =>{
        navbar.forEach(navLink => {
            navLink.classList.remove("active");
        });
        //Make selected navlink current
        e.path[0].classList.add("active");
        //Run the corresponding module
        if (e.path[0].id == "menu") {menu()};
        if (e.path[0].id == "contact") {contact()};
        if (e.path[0].id == "locations") {locations()};
        if (e.path[0].id == "careers") {careers()};
    });
});

