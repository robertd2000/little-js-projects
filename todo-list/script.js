let list = document.querySelector('.list'),
    userInput = document.querySelector('.user_input'),
    submitBtn = document.querySelector('.submit')

const createItem = (text) => {
    let item = document.createElement('div')
    item.classList.add('item')
    let p = document.createElement('p')
    let check = document.createElement('i')
    let deleteBtn = document.createElement('i')
    p.textContent = text
    check.textContent = '✔'
    deleteBtn.textContent = '✖'
    deleteBtn.addEventListener('click', () => deleteItem(item))
    check.addEventListener('click', () => checkHandler(item))
    item.append(check, p, deleteBtn)
    return item
}

const addItem = () => {
    let text = userInput.value
    let item = createItem(text)
    list.append(item)
    userInput.value = ''
}

const deleteItem = (item) => {
    item.remove()
}

const checkHandler = (item) => {
    if (item.classList.contains('checked')) item.classList.remove('checked')
    else {
        item.classList.add('checked')
    }
}

submitBtn.addEventListener('click', addItem)
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addItem()
    }
})