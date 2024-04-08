const header = document.querySelector("header");
window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",this.window.scrollY  >100);
});

let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open');
}

const navItems = document.querySelectorAll('.navlist a');

function setActiveNavItem(event) {
  // Remove the active class from all navigation items
  navItems.forEach(item => item.classList.remove('active'));

  // Add the active class to the clicked navigation item
  event.target.classList.add('active');
}

// Attach the click event listener to each navigation item
navItems.forEach(item => item.addEventListener('click', setActiveNavItem));

// Function to set the active class to the currently visible section
function setActiveNavItem() {
  // Get the current scroll position
  const scrollY = window.scrollY;

  // Loop through each section to check its position
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 100; // Adjust the offset as needed
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');

    // Add the active class to the corresponding navigation item if the section is in the viewport
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navItems.forEach(item => item.classList.remove('active'));
      document.querySelector(`.navlist a[href="#${sectionId}"]`).classList.add('active');
    }
  });
}

// Attach the scroll event listener to detect when the user scrolls
window.addEventListener('scroll', setActiveNavItem);

// Call setActiveNavItem on page load to set the active class initially
setActiveNavItem();

const call_i = document.querySelector('.bxs-phone-call');
const call_p = document.querySelector('.phone');
const mail_i = document.querySelector('.bx-mail-send');
const mail_p = document.querySelector('.mail');
const call_div = document.querySelector('.call-div');
const mail_div = document.querySelector('.mail-div');


call_i.onclick = () => {
  call_div.classList.add("visible");
}

mail_i.onclick = () => {
  mail_div.classList.add("visible");
}