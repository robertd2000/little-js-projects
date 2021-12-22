let list = document.querySelector('.list'),
    inputDom = document.querySelector('.input'),
    clearBtn = document.querySelector('.clear')

const addItem = () => {
    let text = inputDom.value
    let item = createItem(text)
    item.addEventListener('click', deletion)
    list.append(item)
    inputDom.value = ''
}

const createItem = (text) => {
    let item = document.createElement('h2')
    item.textContent = '- ' + text
    return item
}

const deletion = (e) => {
    console.log(e.target.style.textDecoration);
    if (e.target.style.textDecoration) e.target.style.textDecoration = ''
    else {
        e.target.style.textDecoration = "line-through"
    }
}

const clear = () => {
    list.innerHTML = ''
}

inputDom.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        addItem()
    }
})

clearBtn.addEventListener('click', clear)