let timeBegan = null
let timeStopped = null
let stoppedDuration = 0
let startInterval = null
let flag = false

const generateClocks = () => {
    let clockInner = document.querySelector('.clock_inner')
    let day = document.createElement('h2')
    day.id = 'day'
    let hours = document.createElement('h2')
    hours.id = 'hours'
    let minutes = document.createElement('h2')
    minutes.id = 'minutes'
    let seconds = document.createElement('h2')
    seconds.id = 'seconds'
    let milliSeconds = document.createElement('h2')
    milliSeconds.id = 'milliSeconds'
    let bar1 = document.createElement('h2')
    bar1.textContent = ':'
    let bar2 = document.createElement('h2')
    bar2.textContent = ':'
    let bar3 = document.createElement('h2')
    bar3.textContent = ':'
    hours.textContent = '00'
    minutes.textContent = '00'
    seconds.textContent = '00'
    milliSeconds.textContent = '00'

    clockInner.append(day, hours, bar1, minutes, bar2, seconds, bar3, milliSeconds)
}

const runTimer = () => {
    let current = new Date()
    let timeElapsed = new Date(current - timeBegan - stoppedDuration)

    calculateTime(timeElapsed)
}

const calculateTime = (date) => {
    let hour = date.getUTCHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let milliSeconds = Math.floor(date.getMilliseconds() / 10) 

    document.querySelector('#hours').textContent = hour < 10 ? '0' + hour : hour
    document.querySelector('#minutes').textContent = minutes < 10 ? '0' + minutes : minutes
    document.querySelector('#seconds').textContent = seconds < 10 ? '0' + seconds : seconds
    document.querySelector('#milliSeconds').textContent = milliSeconds < 10 ? '0' + milliSeconds : milliSeconds
}

const startTimer = () => {
    if (timeBegan === null) {
        timeBegan = new Date()        
    }

    if (timeStopped !== null) {
        stoppedDuration += new Date() - timeStopped
    }
    startInterval = setInterval(runTimer, 10);
}

const stopTimer = () => {
    timeStopped = new Date()
    clearInterval(startInterval)
}

let reset = () => {
    clearInterval(startInterval)

    timeBegan = null
    timeStopped = null
    stoppedDuration = 0
    startInterval = null
    flag = false

    document.querySelector('#hours').textContent = '00'
    document.querySelector('#minutes').textContent = '00'
    document.querySelector('#seconds').textContent = '00'
    document.querySelector('#milliSeconds').textContent = '00'
}

document.body.addEventListener('click', () => {
    if (!flag) {
        startTimer()
        flag = true
    } else {
        stopTimer()
        flag = false
    }
})

document.addEventListener('dblclick', reset)
document.addEventListener('DOMContentLoaded', generateClocks)
