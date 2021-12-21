let loader = document.querySelector('.loader')

let index = 0
const slidesList = ['./img/Lam0.jpg', './img/Lam1.jpg', './img/Lam2.jpg', './img/Lam3.jpg', './img/Lam4.jpg', './img/Lam5.jpg', './img/Lam6.jpg', './img/Lam7.jpg']

const generateSlider = (slidesArr) => {
    loader.style.display = 'block'
    let container = document.querySelector('.container')
    let div = document.createElement('div')
    container.append(div)
    slidesArr.forEach((element, i) => {
        let slideDiv = document.createElement('div')
        let slideImg = document.createElement('img')
        slideDiv.classList.add('image')
        slideDiv.classList.add('fade')

        slideImg.src = element
        if (i > 0) {
            slideDiv.style.display = 'none'
        }
        slideDiv.append(slideImg)
        div.append(slideDiv)
    });

    generateDotes(slidesArr.length)
    let prev = document.createElement('a')
    prev.classList.add('prev')
    prev.innerHTML = '&#10094;'
    let next = document.createElement('a')
    next.classList.add('next')
    next.innerHTML = '&#10095;'
    div.append(prev)
    div.append(next)

    prev.addEventListener('click', () => changeSlide(-1))
    next.addEventListener('click', () => changeSlide(1))
    loader.style.display = 'none'
}

const generateDotes = (dotsLen) => {
    let dots = document.createElement('div')
    let container = document.querySelector('.container')
    container.append(dots)
    dots.classList.add('dots')

    for (let i = 0; i < dotsLen; i++) {
        let dot = document.createElement('span')
        dot.classList.add('dot')
        if (i > 0) dot.classList.remove('active')
        else {
            dot.classList.add('active')
        }
        dots.append(dot)
    }
    dotsHandler()
}

const dotsHandler = () => {
    let dots = document.querySelectorAll('.dot')
    dots.forEach((element, i) => {
        if (i === index) element.classList.add('active')
        else {
            element.classList.remove('active')
        }
        element.addEventListener('click', () => {
            index = i
            changeSlide(0)
        })
    })
}

const changeSlide = (count) => {
    index += count
    if (index > 7) index = 0
    if (index < 0) index = 7
    let images = document.querySelectorAll('.image')
    images.forEach((element, i) => {
        if (i === index) element.style.display = 'block'
        else {
            element.style.display = 'none'
        }
    })
    dotsHandler()
}

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')


document.addEventListener('DOMContentLoaded', () => generateSlider(slidesList))

