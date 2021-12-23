const list = JSON.parse(localStorage.getItem('flashcards')) || []

let addBtn = document.querySelector('#add_btn'),
    createWindow = document.querySelector('.create'),
    clearAll = document.querySelector('#clear_all'),
    questionInput = document.querySelector('#question'),
    answerInput = document.querySelector("#answer"),
    saveCard = document.querySelector('#save_card'),
    closeCardBox = document.querySelector('#close_card_box'),
    flashcards = document.querySelector('.flashcards')

const showCreateWindow = () => {
    createWindow.style.display == 'none' || createWindow.style.display == ''
      ? createWindow.style.display = 'block' 
    : createWindow.style.display = 'none'
}

const createCard = ({questionText, answerText}) => {
    let card = document.createElement('div')
    card.classList.add('flashcard')
    let ques = document.createElement('h2')
    let ans = document.createElement('h2')
    ques.textContent = questionText
    ans.textContent = answerText
    ans.style.display = 'none'
    card.appendChild(ques)
    card.appendChild(ans)
    card.addEventListener('click', () => check(ans))
    return card
}

const check = item => {
    item.style.display == 'none' ?
    item.style.display = 'block' :
    item.style.display = 'none'
}

const addCard = () => {
        let text = {questionText: questionInput.value, answerText: answerInput.value}
    if (text) {
        let card = createCard(text)
        list.push(text)
        saveToLs(list)
        flashcards.appendChild(card)
        questionInput.value = ''
        answerInput.value = ''
    }
}

const saveToLs = (list) => {
    localStorage.setItem('flashcards', JSON.stringify(list))
}

const loadList = () => {
    list && list.forEach((text) => {
        let item = createCard(text)
        flashcards.append(item)
    })
}

const clear = ()  => {
    localStorage.clear('flashcards')
    flashcards.innerHTML = ''
}

document.addEventListener('DOMContentLoaded', loadList)
addBtn.addEventListener('click', showCreateWindow)
closeCardBox.addEventListener('click', showCreateWindow)
saveCard.addEventListener('click',  addCard)
clearAll.addEventListener('click', clear)