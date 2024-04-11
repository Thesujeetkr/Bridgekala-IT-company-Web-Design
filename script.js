
// back to top button
let heroSection = document.querySelector('.hero-section')
const footer = document.querySelector('.footer-section')
const scrollBtn = document.createElement('div');

scrollBtn.classList.add('scrollbtn-top');

scrollBtn.innerHTML = `<i class="fa-solid fa-arrow-up top-icon"></i>`

footer.after(scrollBtn);

const scrollTop = () =>{
    heroSection.scrollIntoView({behavior:"smooth"})
}

scrollBtn.addEventListener('click', scrollTop)


// Create a GSAP timeline
let tl = gsap.timeline();

// Add the animations to the timeline
tl.to('.overlayImg', {
     x: 50, 
     yoyo: true,
     rotate:-5,
     duration:4,
     repeat:-1
     })
  .from('.overlayImg', {
     x: -50 , 
     rotate:5,
     duration:4,
     repeat:-1,
     yoyo: true,
    });

// ------------------------------->
let img = gsap.timeline();
img.to('.after-serv-img',{
     x: 50, 
     yoyo: true,
     rotate:-5,
     duration:4,
     repeat:-1
})
img.from('.after-serv-img',{
     x: -50, 
     yoyo: true,
     rotate:-5,
     duration:4,
     repeat:-1
})

// ------------------------------>




// -------------------mobile menu----------------->

const navbar = document.querySelector('nav');
const hamMenu = document.querySelector('.menu');
const navOverlay = document.querySelector('.nav-overlay');
// let index = false;
hamMenu.addEventListener('click', function(){
    
    navbar.classList.toggle('navMenu')
    
});


let menu = document.querySelector('.menu');
menu.onclick = function(){
    menu.classList.toggle('openmenu');
}



const navLink = document.querySelectorAll('.nlink');

navLink.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        navbar.classList.remove('navMenu');
        menu.classList.remove('openmenu');
    })
})
