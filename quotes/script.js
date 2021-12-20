let randomQuoteBtn = document.querySelector('.random_quote')
let quoteBody = document.querySelector('.quote_body')
let quoteBodyInner = quoteBody.querySelector('.quote_body_inner')
let authorDom = document.querySelectorAll('.author')
let tagsDom = document.querySelector('.tags')
let tagLabel = document.querySelector('.tag_label')


const getQuote = async () => {
    const response = await (await fetch(URL)).json()
    return quoteHandler(response)
}

const quoteHandler = (data) => {
    console.log(data)
    quoteBody.textContent = `“${data.quote.body}”` 
    quoteBody.cite = data.quote.url
       
        authorDom.forEach(item =>  item.textContent += data.quote.author)
    
    const tags = data.quote.tags
    let res = tags.length > 0 ? 'tags: ' : ''

    tags && tags.forEach((tag) => {
        console.log(tag);
        let tagBody = `<a class="tag" href="https://favqs.com/quotes/tag/${tag}">&#9750;${tag}</a> `
        res += tagBody + '   '
        tagsDom.innerHTML = res
    })
}

randomQuoteBtn.addEventListener('click', getQuote)
document.addEventListener('DOMContentLoaded', getQuote)

const URL = 'https://favqs.com/api/qotd'

