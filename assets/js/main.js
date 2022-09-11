import { startGame } from './screens.js'

const btnStartGame = document.querySelector('.init')
const divButtons = document.querySelector('.buttons')

btnStartGame.addEventListener('click', () => {
    startGame(divButtons, 'hidden')
})