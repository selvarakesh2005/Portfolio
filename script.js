/*scroll section*/
let sections = document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
               links.classList.remove('active');
               document.querySelector('header nav a[href*='+ id + ']').classList.add('active');

            });
        };
    });

/*==sticky navbar====*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100)
};

/*                      */
let menuIcon = document.querySelector("#manu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");

    // Change icon (bx-menu → bx-x)
    if (menuIcon.classList.contains("bx-menu")) {
        menuIcon.classList.replace("bx-menu", "bx-x");
    } else {
        menuIcon.classList.replace("bx-x", "bx-menu");
    }
};

// Optional: Close menu when clicking a link
document.querySelectorAll(".navbar a").forEach(link => {
    link.onclick = () => {
        navbar.classList.remove("active");
        menuIcon.classList.replace("bx-x", "bx-menu");
    };
});
