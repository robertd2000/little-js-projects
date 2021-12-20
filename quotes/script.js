let randomQuoteBtn = document.querySelector('.random_quote')
let quoteBody = document.querySelector('.quote_body')
let quoteBodyInner = quoteBody.querySelector('.quote_body_inner')
let authorDom = document.querySelectorAll('.author')
let tagsDom = document.querySelector('.tags')
let tagLabel = document.querySelector('.tag_label')
let loader = document.querySelector('.loader')


const getQuote = async () => {
    loader.style.display = 'block'
    const response = await (await fetch(URL)).json()
    loader.style.display = 'none'

    return quoteHandler(response)
}

const quoteHandler = (data) => {
    quoteBody.textContent = `“${data.quote.body}”` 
    quoteBody.cite = data.quote.url 
    authorDom.forEach(item =>  item.textContent += data.quote.author)
    
    const tags = data.quote.tags
    let res = tags.length > 0 ? 'tags: ' : ''

    tags && tags.forEach((tag) => {
        let tagBody = `<a class="tag" href="https://favqs.com/quotes/tag/${tag}">&#9750;${tag}</a> `
        res += tagBody + '   '
        tagsDom.innerHTML = res
    })
}

randomQuoteBtn.addEventListener('click', getQuote)
document.addEventListener('DOMContentLoaded', getQuote)

const URL = 'https://favqs.com/api/qotd'

