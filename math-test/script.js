let wrapper = document.querySelector('.wrapper')
    options = document.querySelector('.options')


let operation = '+'
let score = 0
let colorsList = ['#FE4A49', '#2AB7CA', '#FED766']
let rightAnswer

options.addEventListener('click', e => {
    operation = e.target.dataset.operator
    setActive(e.target)
    generateEquation()
})

const setActive = (item) => {
    for (const i of options.children) {
        if (i == item) i.className = 'active'
        else i.className = ''
    } 
}


const createQuestionCard = (num1, num2, operator) => {
    
    let num1Dom = document.querySelector('#num1')
    let num2Dom = document.querySelector('#num2')
    let op = document.querySelector('#op')
    let ques = document.querySelector('#ques')
    let equal = document.querySelector('#equal')

    num1Dom.style.color = '#FE4A49'
    op.style.color = '#2AB7CA'
    num2Dom.style.color = '#FED766'
    equal.style.color = '#F86624'
    ques.style.color = 'gray'

    num1Dom.textContent = num1
    num2Dom.textContent = num2
    op.textContent = operator
    equal.textContent = '='
    ques.textContent = '?'
}   

const getRandomNumber = () => Math.floor(Math.random() * 13)

const createAnswersCard = (answer) => {
    const answerOptions = document.createElement('div')
    answerOptions.className = 'answer-options'
    let answer1 = getRandomNumber()
    let answer2 = getRandomNumber()

    if (operation == '/') {
        answer1 = answer1.toFixed(1)
        answer2 = answer2.toFixed(1)
    } 
    const answers = [answer, answer1, answer2]
    const switchAnswers = []
    for (i = answers.length; i--;) {
        switchAnswers.push(answers.splice(Math.floor(Math.random() * (i + 1)), 1)[0])
      };
    
    let optionsDiv = document.querySelectorAll('.option')
    switchAnswers.forEach((i, idx) => {
        let option = optionsDiv[idx]
        option.className = 'option' 
        option.innerHTML = `<h2>${i}</h2>` 
        option.style.background = colorsList[idx] 
        option.addEventListener('click', changeQuestion)
    })
}

const generateEquation = () => {
    let number1 = getRandomNumber()
    let number2 = getRandomNumber()
    rightAnswer = eval(`${number1} ${operation} ${number2}`)

    if (operation == '/') {
        number1 = number1.toFixed(1)
        number2 = number2.toFixed(1)
        rightAnswer = rightAnswer.toFixed(1)
        if (number2 == 0.0 || number2 == '0.0') {
            console.log('0');
            number2 = getRandomNumber().toFixed()
            rightAnswer = eval(`${number1} ${operation} ${number2}`).toFixed(1)
        }
    } 
    createQuestionCard(number1, number2, operation)
    createAnswersCard(rightAnswer)
}

const changeQuestion = (e) => {
    if (rightAnswer == e.target.textContent) {
       score++ 
       document.querySelector('#score').textContent = `Score: ${score}`
       document.querySelector('#true').style.display = 'block'
       setTimeout(() => {
        document.querySelector('#true').style.display = 'none'
        generateEquation()        
    }, 1500);
    }  else {
       document.querySelector('#false').style.display = 'block'
       setTimeout(() => {
        document.querySelector('#false').style.display = 'none'
       }, 1000);
    }

}

document.addEventListener('DOMContentLoaded', generateEquation)
