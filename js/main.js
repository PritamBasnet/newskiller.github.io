// Js for the profile card
const ProfileItem = document.querySelector('.Profile-Item');
const ProfileCard = document.querySelector('.Profile-Card');
const PLink = document.querySelector('.P-Link');
ProfileItem.addEventListener("click", ()=>{
    PLink.classList.toggle('red');
    ProfileCard.classList.toggle('Profile_active');
});
const ProfileItem2 = document.querySelector('.Profile-Item2');
const ProfileCard2 = document.querySelector('.Profile-Card2');
const PLink2 = document.querySelector('.P-Link2');
ProfileItem2.addEventListener("click", ()=>{
    PLink2.classList.toggle('red');
    ProfileCard2.classList.toggle('Profile_active');
});


// for the side bar
const HamBurger = document.querySelector('.Ham-Burger');
const sidebar = document.querySelector('.sidebar');
const sidelist = document.querySelector('.sidebar-list');
const sideItem = document.querySelectorAll('.sidebar-item');
HamBurger.addEventListener("click", ()=>{
    HamBurger.classList.toggle('ham-active');
    sidebar.classList.toggle('sibebar-active');
    setTimeout(()=>{
        sidelist.style.opacity = "1";
        sidelist.classList.toggle('list-activated');
    },600)
});