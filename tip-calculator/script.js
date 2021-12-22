let bill = document.querySelector('#bill'),
    guests = document.querySelector('#guests'),
    quality = document.querySelector('#quality'),
    calculate = document.querySelector('.calculate')

const calculation = (billAmount, guestsCount, serviceQuality) => {
    return ((billAmount * serviceQuality) / guestsCount).toFixed(2)
}

const calculateHandler = () => {
    let tip = calculation(bill.value, guests.value, quality.value)
    
    let message = tip ? `Чаевые - ${tip} руб. от каждого` : `Чаевые - 0 руб.`
    showMessage(message)
}

const showMessage = (message) => {
    let tip = document.querySelector('#tip-amount')
    console.log(tip);
    tip.className = 'show'
    tip.textContent = message
    setTimeout(() => tip.className = tip.className.replace('show', ''), 15000)
}

calculate.addEventListener('click', calculateHandler)