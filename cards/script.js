let cardsDom = document.querySelector('.cards')
let loader = document.querySelector('.loader')

const itemsList = [
    {
        title: 'Hex-цвета',
        img: './cards/images/hex.png',
        href: './hex/index.html',
        text: 'Это приложение меняет цвет фона и выводит на экран hex-коды использованных цветов.'
    },
    {
        title: 'Случайные цитаты',
        img: './cards/images/quotes.png',
        href: './quotes/index.html',
        text: 'Простой генератор цитат, заряженный большим количеством мотивирующих высказываний.'
    },
    {
        title: 'Карусель изображений',
        img: './cards/images/slider.png',
        href: './slider/index.html',
        text: 'Карусель изображений или слайдер.'
    },
    {
        title: 'Электронные часы',
        img: './cards/images/clock.png',
        href: './clock/index.html',
        text: 'Простые электронные часы с возможностью менять тему'
    },
    {
        title: 'Калькулятор v1',
        img: './cards/images/calc1.png',
        href: './calculator-1/index.html',
        text: 'Простой калькулятор, использующий функцию eval.'
    },
    {
        title: 'Калькулятор v2',
        img: './cards/images/calc2.png',
        href: './calculator-2/index.html',
        text: 'Калькулятор (без использования функции eval) с некоторыми дополнительными функциями (операциями).'
    },
    {
        title: 'Список покупок',
        img: './cards/images/grocery.png',
        href: './grocery-list/index.html',
        text: 'Приложение для составления списка покупок '
    },
    {
        title: 'Калькулятор чаевых',
        img: './cards/images/tip.png',
        href: './tip-calculator/index.html',
        text: 'функция, которая будет высчитывать, сколько чаевых должен заплатить каждый.'
    },
    {
        title: 'Список задач',
        img: './cards/images/todo.png',
        href: './todo-list/index.html',
        text: 'Это приложение для создания простых заметок (localStorage).'
    },
    {
        title: 'Флеш-карточки',
        img: './cards/images/flashcards.png',
        href: './flashcards/index.html',
        text: 'Это приложение позволяет создавать флеш-карточки.'
    },
    {
        title: 'Клейкие заметки',
        img: './cards/images/sticky.png',
        href: './sticky-notes/index.html',
        text: 'Приложение для создания клейких заметок.'
    },
    {
        title: 'Секундомер',
        img: './cards/images/timer.png',
        href: './timer/index.html',
        text: 'Простой таймер (секундомер).'
    },
    {
        title: 'Пишущая машинка',
        img: './cards/images/typewriter.png',
        href: './type-writer/index.html',
        text: 'Это приложение выбирает случайную цитату из API и выводит ее на экран с эффектом набора на пишущей машинке.'
    },
    {
        title: 'Github-профили',
        img: './cards/images/github.png',
        href: 'https://robertd2000.github.io/git-hub-profile-vue/',
        text: 'Приложение для поиска и просмотра профилей на Github (Vue js).'
    },
    {
        title: 'Математика для детей',
        img: './cards/images/math.png',
        href: './math-test/index.html',
        text: 'Приложение для обучения детей простым арифметическим операциям.'
    },
    {
        title: 'генератор картинок',
        img: './cards/images/unsplash.png',
        href: './image-generator/index.html',
        text: 'Генератор картинок.'
    },
    {
        title: 'Anime App',
        img: './cards/images/anime.png',
        href: 'https://robertd2000.github.io/graphql-anime-app/',
        text: 'React приложение для поиска аниме (инф. о аниме, персонажей и т.д)'
    },
    {
        title: 'Movie App',
        img: './cards/images/movie.png',
        href: 'https://robertd2000.github.io/Movies-yts-react-redux/',
        text: 'React приложение для поиска фильмов (инф. о фильме, комментарии и т.д)'
    },
    {
        title: 'Weather App',
        img: './cards/images/weather.png',
        href: 'https://robertd2000.github.io/weather-api-with-redux-tools/',
        text: 'React приложение для просмтора прогноза погоды'
    },
]

const colorsList = ['rgba(255, 166, 0, 0.7)', 'rgba(255, 0, 0, 0.7)', 'rgba(128, 0, 128, 0.7)', 
'rgba(30, 143, 255, 0.7)', 'rgba(50, 205, 50, 0.7)', 'rgba(76, 0, 130, 0.7)']
let i = 0

const generateCard = (data) => {
    const card = document.createElement('div')
    const a = document.createElement('a')
    const img = document.createElement('img')
    const details = document.createElement('div')
    const title = document.createElement('h1')
    const br = document.createElement('br')
    const p = document.createElement('p')

    card.className = 'card'
    img.className = 'image'
    a.href = data.href
    img.src = data.img
    details.className = 'details'
    title.textContent = data.title
    p.textContent = data.text

    details.append(title, br, p)
    a.append(img, details)
    card.append(a)
    return card
}

const addCards = () => {
    loader.style.display = 'block'
    itemsList.reverse().forEach(item => {
        let card = generateCard(item)
        card.style.backgroundColor = colorsList[i]
        cardsDom.append(card)
        i++
        if (i >= colorsList.length) i = 0
    })
    loader.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', addCards)
