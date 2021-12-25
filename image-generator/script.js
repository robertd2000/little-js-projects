const token = 'SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'
let page = 1
let totalPages
let URi = `https://api.unsplash.com/search/photos?query=cat&per_page=30&page=1&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`
const URL = 'https://api.unsplash.com/search/photos?query='

let imageList = document.querySelector('.image_list'),
    userInput = document.querySelector('.user_input'),
    search = document.querySelector('#search'),
    loader = document.querySelector('.loader'),
    paginationInner = document.querySelector('.pagination_inner')


const creteImageCard = (imgUrl) => {
    let card = document.createElement('div')
    card.className = 'img'
    card.style.backgroundImage = `url(${imgUrl})`
    return card
}

const getImages = async (query) => {
    loader.style.display = 'block'
    let url = `${URL}${query}&per_page=30&page=${page}&client_id=${token}`
    const response = await fetch(url)
    const res = await response.json()
    return res
}

const generateList = async () => {
    imageList.innerHTML = ''
    let data = await getImages(userInput.value)
    loader.style.display = 'none'
    totalPages = data.total_pages
    let results = data.results
    results.forEach(element => {
        let card = creteImageCard(element.urls.regular)
        imageList.append(card)
    });
    paginationInner.innerHTML = ''
    pagination(totalPages, page)
}

const changePage = (curPage) => {
    page = curPage
    console.log(startPage);
    paginationInner.innerHTML = ''
    pagination(totalPages, page)
    generateList()
}

let startPage, endPage
const pagination = (totalPages, currentPage) => {
   
    if (totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 1
        endPage = totalPages
    } else {
        // more than 10 total pages so calculate start and end pages
        if (currentPage <= 6) {
            console.log(currentPage);
            startPage = 1
            endPage = 10
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9
            endPage = totalPages

        } else {
            startPage = currentPage - 5
            endPage = currentPage + 4

        }
    }

    const toStartPage = () => {
        changePage(1)
    }

    const toEndPage = () => {
        changePage(totalPages)
    }

    const prevPage = () => {
        if (currentPage === 1 || currentPage < 1) return false
        changePage(currentPage - 1)
    }

    const nextPage = () => {
        if (currentPage > totalPages || currentPage === totalPages) return false
        changePage(currentPage + 1)
    }

    const pages = [...Array(endPage + 1 - startPage).keys()].map(
        (i) => startPage + i
    )

    let ul = document.createElement('ul')
    ul.className = 'pagination'
    let toStartPageBtn = document.createElement('li')
    toStartPageBtn.innerHTML = '<span>To start</span>'
    let prevPageBtn = document.createElement('li')
    prevPageBtn.innerHTML = '<span>Prev</span>'
    let nextPageBtn = document.createElement('li')
    nextPageBtn.innerHTML = '<span>Next</span>'
    let toLastBtn = document.createElement('li')
    toLastBtn.innerHTML = '<span>To end</span>'

    toStartPageBtn.addEventListener('click', toStartPage)
    prevPageBtn.addEventListener('click', prevPage)
    nextPageBtn.addEventListener('click', nextPage)
    toLastBtn.addEventListener('click', toEndPage)

    let pagesItem = [] 
    ul.append(toStartPageBtn, prevPageBtn)

    pages.forEach((i) =>{
        let li = document.createElement('li')
        let span = document.createElement('span')
        span.addEventListener('click', () => changePage(i) )
        if (page == i) span.className = 'active'
        span.textContent = i
        li.append(span)
        pagesItem.push(li)
        ul.append(li)
    })

    ul.append(nextPageBtn, toLastBtn)
    paginationInner.append(ul)
}

userInput.addEventListener('keydown', e => {
    if (e.key == 'Enter') generateList()
} )
search.addEventListener('click', generateList)
document.addEventListener('DOMContentLoaded', () => {
    generateList()
})
