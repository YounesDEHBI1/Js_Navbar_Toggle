// Select concerned elements
// Target my navToggle
const navToggle = document.querySelector(".nav-toggle");
// Target my links
const links = document.querySelector(".links");

// Set event listener on navbar toggle for click event
navToggle.addEventListener('click', function () {

    // check links element class list
    //console.log(links.classList);

    // check if links element contains "show-links" class
    //console.log(links.classList.contains("show-links"));

    // Show & Hide the nav - 1st method
    /*if(links.classList.contains("show-links")) {
        links.classList.remove('show-links');
    } else {
        links.classList.add('show-links');
    }*/

    // Show & Hide the nav - 2nd method
    links.classList.toggle('show-links');
});