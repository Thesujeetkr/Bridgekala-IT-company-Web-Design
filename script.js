
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