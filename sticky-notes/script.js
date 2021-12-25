let notes = document.querySelector('.notes'),
    addNoteBtn = document.querySelector('.add_btn'),
    modal = document.querySelector('.modal'),
    modalInner = document.querySelector('.modal_inner'),
    userInput = document.querySelector('#user_input'),
    closeBtn = document.querySelector('.close_btn')

const random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
let index = 0
const randomInterval = (min, max) => {
    return Math.floor(Math.random() * (max - (min) + 1) + min)
}
const createNote = (text) => {
    let note = document.createElement('div')
    note.classList.add('note')
    note.setAttribute('style', `transform: rotate(${randomInterval(-8, 5)}deg);
    margin: ${randomInterval(-5, 7)}px;
    background-color: ${random_colors[index]}`)
    let details = document.createElement('div')
    details.className = 'details'
    note.append(details)
    let h2 = document.createElement('h2')
    h2.textContent = text
    details.append(h2)
    index++
    if (index > random_colors.length) index = 0
    return note
}

const addNote = (text) => {
    let note = createNote(text)
    note.addEventListener('dblclick', () => {
        note.remove()
    })
    notes.append(note)
}

const showModal = () => {
    if (modal.style.display == 'none') {
        modal.style.display = 'block'
    } else if (modal.style.display == '' || modal.style.display == 'block') {
        modal.style.display = 'none'
    }
}

addNoteBtn.addEventListener('click', showModal)
closeBtn.addEventListener('click', showModal)
modal.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target == modal || e.target == modalInner)
    showModal()
})
userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        addNote(userInput.value)
    }
})