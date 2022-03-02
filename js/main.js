const navContainer = document.querySelector('.nav-container');
const navShowBtn = document.getElementById('nav-show-btn');
const navCloseBtn = document.getElementById('nav-close-btn');

navShowBtn.addEventListener('click', () => {
    navCloseBtn.classList.add('active');
    navShowBtn.classList.remove('active');
    navContainer.classList.add('active');
});

navCloseBtn.addEventListener('click', () => {
    navCloseBtn.classList.remove('active');
    navShowBtn.classList.add('active');
    navContainer.classList.remove('active');
});


// visual stripes animation

const visualStripes = document.querySelectorAll('.visual-stripe');

function animateStripes(){
    visualStripes.forEach(stripe, animateStripes())
}

animateStripes();