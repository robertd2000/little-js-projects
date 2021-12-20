let container = document.querySelector('.container')
let button = document.querySelector('button')
let card_hext_code = document.querySelector('.card_hext_code')


const randomHex = () => {
    let rgb1 = ''

    for (let index = 0; index < 3; index++) {
        rgb1 += Math.floor(Math.random() * 256) + ','
    }
   
    return rgb1.slice(0, rgb1.length - 1)
}

const setColor = () => {
    const rgb1 = randomHex()
    const rgb2 = randomHex()

    const hexString = `linear-gradient(to right, rgb(${rgb1}), rgb(${rgb2}))`
    console.log(hexString)
    document.body.style.background =  hexString;
    card_hext_code.textContent = `background: ${hexString}`
}

document.addEventListener('DOMContentLoaded', setColor)
button.addEventListener('click', setColor)