const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('showmenu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('showmenu')
    })
}


// REMOVE EACH LINK

const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(navLink => {
    navLink.addEventListener('click', () => {
        navMenu.classList.remove('showmenu')
    })

});

const scrollHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scrollheader') : header.classList.remove('scrollheader')
}

window.addEventListener('scroll' , scrollHeader)


// SCROLL UP

function scrollUp() {
    const scrollUp = document.getElementById("scroll-up")
    if (this.scrollY >= 350){
        scrollUp.classList.add('show-scroll')
    }
    else {
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)

// SHOW ACTIVE SECTION LINK

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// SCROLL REVEAL ANIMATION



const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true
})


sr.reveal(`.home_data, .footer`)
sr.reveal(`.home_dish`, {delay: 500 , distance: '100px', origin: 'bottom'})
sr.reveal(`.home_burger`, {delay: 1200 , distance: '100px', duration: 1500})
sr.reveal(`.home_ingredient`, {delay: 1600 , interval: 100})
sr.reveal(`.recipe_img, .delivery_img, .contact_image`, {origin: 'left'})
sr.reveal(`.recipe_data, .delivery_data,  .contact_data`, {origin: 'right'})
sr.reveal(`.popular_card`, {interval: 100})