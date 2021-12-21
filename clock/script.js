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
    let bar1 = document.createElement('h2')
    bar1.textContent = ':'
    let bar2 = document.createElement('h2')
    bar2.textContent = ':'
    clockInner.append(day, hours, bar1, minutes, bar2, seconds)
    calculateTime()
}

const calculateTime = () => {
    let date = new Date()
    let day = date.getDay()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    var dayNames = ["ВС", "ПН", "ВТ", "СР", "ЧТ","ПТ", "СБ"];

    document.querySelector('#day').textContent = dayNames[day]
    document.querySelector('#hours').textContent = hour < 10 ? '0' + hour : hour
    document.querySelector('#minutes').textContent = minutes < 10 ? '0' + minutes : minutes
    document.querySelector('#seconds').textContent = seconds < 10 ? '0' + seconds : seconds
    setTimeout(calculateTime, 200)
}

document.addEventListener('DOMContentLoaded', generateClocks)
