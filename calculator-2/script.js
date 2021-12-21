let switcher = document.querySelector('.switch')

const generateCalculator = () => {
    let calculatorDom = document.querySelector('.calculator')
    let screen = document.querySelector('.screen')
    const screenInput = document.createElement('input')
    screenInput.placeholder = '0'
    screenInput.disabled = true
    screenInput.classList.add('calculation-input', 'display-result')
    screenInput.type = 'text'

    screen.append(screenInput)

    const buttonsList = [
        'x²', '√', '⅟', '+/-',
        'C', '<', '%', '+',
        '1', '2', '3', '-',
        '4', '5', '6', '*',
        '7', '8', '9', '/',
        '0', '.', '=',
    ]

    buttonsList.forEach(item => {
        let btn = document.createElement('input')
        btn.type = 'button'
        btn.value = item
        btn.classList.add('cal-item')
        calculatorDom.append(btn)

        if (['+', '-', '*', '/', '%'].includes(item)) {
            btn.classList.add('green-input')
            btn.addEventListener('click', () => operandClick(item, screenInput))
        } else if (item === '=') {
            btn.classList.add('eval-item')
            btn.addEventListener('click', () => calculateHandler(screenInput))
        } else if (item === 'C') {
            btn.addEventListener('click', () => cleanHandler(screenInput))
        } else if (item === '<') {
            btn.addEventListener('click', () => deleteHandler(screenInput))
        } else if (item === 'x²') {
            btn.addEventListener('click', () => powHandler(screenInput))
        } else if (item === '√') {
            btn.addEventListener('click', () => squareHandler(screenInput))
        } else if (item === '⅟') {
            btn.addEventListener('click', () => fractionHandler(screenInput))
        } else if (item === '+/-') {
            btn.addEventListener('click', () => degreeHandler(screenInput))
        } else {
            btn.addEventListener('click', () => press(item, screenInput))
        }
    })

    switcher.addEventListener('change', (e) => switchHandler(e, calculatorDom))
}

const switchHandler = (e, body) => {
    if (e.target.checked) {
        body.id = 'my-cal-dark'
    } else {
        body.id = ''
    }
}

let action
let number1

const press = (value, screen) => {
    screen.value += value
}

const operandClick = (item, screen) => {
    action = item
    number1 = screen.value
    screen.value = ''
}

const calculation = (number2) => {
    switch (action) {
        case '+':
            return +number1 + +number2
        case '-':
            return +number1 - +number2
        case '*':
            return +number1 * +number2
        case '/':
            return +number1 / +number2
        case '%':
            return +number1 * +number2 / 100
    
        default:
            break;
    }
}

const calculateHandler = (screen) => {
    screen.value = calculation(screen.value)
    action = ''
}

const deleteHandler = (screen) => {
    if (screen.value.length - 1 < 0) screen.value = ''
    screen.value = screen.value.slice(0, screen.value.length - 1)
}

const cleanHandler = (screen) => {
    screen.value = ''
}

const powHandler = (screen) => {
    screen.value = Math.pow(screen.value, 2)
    action = ''
}

const squareHandler = (screen) => {
    screen.value = Math.sqrt(screen.value)
    action = ''
}

const fractionHandler = (screen) => {
    screen.value = 1 / screen.value
    action = ''
}

const degreeHandler = (screen) => {
    let res = -parseInt(screen.value)
    screen.value = res.toString()
    action = ''
}

document.addEventListener('DOMContentLoaded', generateCalculator)
