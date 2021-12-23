let list = document.querySelector('.list'),
    userInput = document.querySelector('.user_input'),
    submitBtn = document.querySelector('.submit')

const todoList =JSON.parse(localStorage.getItem('todo-list'))  || []

const loadTodos = () => {
    console.log(todoList);
    todoList && todoList.forEach((item) => {
        let todoItem = createItem(item)
        list.append(todoItem)
    })
}

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
    console.log(item);
    return item
}

const addItem = (text) => {
    if (text) {
        let item = createItem(text)
        todoList.push(text)
        list.append(item)
        saveToLs(todoList)
        userInput.value = ''
    }
    console.log(todoList);
}

const saveToLs = (list) => {
    localStorage.setItem('todo-list', JSON.stringify(list))
}

const deleteItem = (item) => {
    todoList.forEach((i, idx) => {
        if (i === item.children[1].textContent) {
            todoList.splice(idx, 1)
        }
    })
    saveToLs(todoList)
    console.log(item.children[1].textContent);
    item.remove()
}

const checkHandler = (item) => {
    if (item.classList.contains('checked')) item.classList.remove('checked')
    else {
        item.classList.add('checked')
    }
}

document.addEventListener('DOMContentLoaded', loadTodos)
submitBtn.addEventListener('click', () => addItem(userInput.value))
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addItem(userInput.value)
    }
})