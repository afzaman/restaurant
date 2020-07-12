import menu from './menu'
import contact from './contact'
import locations from './locations'
import careers from './careers'

//window.onload = menu();

//Get all tabs from navbar.
let navbar = document.querySelectorAll('.nav-link');
let active = document.querySelector('.active');

//Add an onclick event that will render each module.
navbar.forEach(navLink => {
    //Add Event Listener
    navLink.addEventListener("click", (e) =>{
        navbar.forEach(navLink => {
            navLink.classList.remove("active");
        });
        //Make selected navlink current
        e.path[0].classList.add("active")
        //Run the corresponding module
        if (e.id == "menu") menu();
        if (e.id == "contact") contact();
        if (e.id == "locations") locations();
        if (e.id == "careers") careers();
    });
});

