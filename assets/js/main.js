import { addOrRemoveClassToElement } from './screens.js'

const btnStartGame = document.querySelector('.init')
const btnStartAdd = document.querySelector('.add')
const divButtons = document.querySelector('.buttons')
const addWord = document.querySelector('.addWord')

// click to start game
btnStartGame.addEventListener('click', () => {
    addOrRemoveClassToElement(divButtons, 'hidden')
})

// click to add word
btnStartAdd.addEventListener('click', () => {
    addOrRemoveClassToElement(divButtons, 'hidden')
    addOrRemoveClassToElement(addWord, 'hidden')
})