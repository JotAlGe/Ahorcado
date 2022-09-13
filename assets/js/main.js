import { addOrRemoveClassToElement } from './screens.js'
import { drawBaseLIne, drawLetterWord, getAWordRandom, createInput } from './canvas.js'

const btnStartGame = document.querySelector('.init')
const btnStartAdd = document.querySelector('.add')
const divButtons = document.querySelector('.buttons')
const addWord = document.querySelector('.addWord')
const sectionNewgame = document.querySelector('.new__game')
const cancelBtn = document.querySelector('.cancel')
const desistBtn = document.getElementById('desist')
const newGameBtn = document.getElementById('save')
const canvas = document.querySelector('.new__game--canvas')
const containerWord = document.getElementById('container')

// click to start game
btnStartGame.addEventListener('click', () => {
    addOrRemoveClassToElement(divButtons, 'hidden')
    addOrRemoveClassToElement(sectionNewgame, 'hidden')
    drawBaseLIne(canvas)
    drawLetterWord(canvas)
})

// click to add word
btnStartAdd.addEventListener('click', () => {
    addOrRemoveClassToElement(divButtons, 'hidden')
    addOrRemoveClassToElement(addWord, 'hidden')
})

// click to desist button
cancelBtn.addEventListener('click', () => {
    addOrRemoveClassToElement(divButtons, 'hidden')
    addOrRemoveClassToElement(addWord, 'hidden')
})

// click to desist button
desistBtn.addEventListener('click', () => {
    addOrRemoveClassToElement(divButtons, 'hidden')
    addOrRemoveClassToElement(sectionNewgame, 'hidden')
})

// click to new game
newGameBtn.addEventListener('click', () => {
    console.log(createInput(containerWord, getAWordRandom().length))
})