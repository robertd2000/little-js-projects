let quoteDom = document.querySelector('.quote')

const url = 'https://api.quotable.io/random'
let quote = ''
let pos = 0
let flag = false

const getQuote = async (url) => {
    const response = await fetch(url)
    return response.json()
}

const createQuote = async () => {
    if (!flag) {
        const data = await getQuote(url)
        quote = data.content
        quote += ''

        flag = true
    }
    quoteDom.innerHTML = quote.slice(0, pos)  + '<span>\u25AE</span>'

    if (pos++ != quote.length) {     
        setTimeout(createQuote, 100)
    } else {
        quote = ' '
        setTimeout(createQuote, 4000)
        pos = 0
        flag = false
    }
}
 
document.addEventListener('DOMContentLoaded', createQuote)
