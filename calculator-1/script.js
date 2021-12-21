const generateCalculator = () => {
    let calculatorDom = document.querySelector('.calculator')
    let screen = document.querySelector('.screen')

    const buttonsList = [
        '7', '8', '9', '+',
        '4', '5', '6', '-',
        '1', '2', '3', '*',
        '0', '/', 'C', '='
    ]

    const screenInput = document.createElement('input')
    screenInput.placeholder = '0'
    screenInput.disabled = true
    screenInput.classList.add('screen-input')
    screenInput.type = 'text'

    screen.append(screenInput)
    buttonsList.forEach(item => {
        let btn = document.createElement('input')
        btn.type = 'button'
        btn.value = item
        btn.classList.add('btn-cal', 'btn-cal-radius')
        if (item === 'C') btn.classList.add('clean')
        if (item === '=') btn.classList.add('equal')

        btn.addEventListener('click', () => {
            if (item === 'C') {
                expression = ''
                screenInput.value = expression
            }
            else if (item === '=') calculate(screenInput)
            else {
                press(item, screenInput)
            }
        } )
        calculatorDom.append(btn)
    })
}

let expression = ''

const press = (value, screen) => {
    expression += value
    screen.value = expression
}

const calculate = screen => {
    let res = eval(expression)
    screen.value = res
    expression = res
}

document.addEventListener('DOMContentLoaded', generateCalculator)
