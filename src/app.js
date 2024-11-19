import colorRandom from './utils'
export default function initApp() {
    const body = document.querySelector('body')
    body.style.background = colorRandom()
    const button = document.createElement('button')
    button.className = 'button'
    button.innerText = 'Изменить цвет страницы'
    body.append(button)
    button.addEventListener('click', () =>  body.style.background = colorRandom())
}