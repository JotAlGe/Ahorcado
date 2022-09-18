import { addOrRemoveClassToElement } from './screens.js'
import { drawBaseLIne, drawLetterWord, getAWordRandom, createInput, saveNewWord, drawVerticalLine } from './canvas.js'

// buttons
const btnStartGame = document.querySelector('.init')
const btnStartAdd = document.querySelector('.add')
const cancelBtn = document.querySelector('.cancel')
const desistBtn = document.getElementById('desist')
const newGameBtn = document.getElementById('save')
const newWordBtn = document.getElementById('newWord')

// DOM elements
const divButtons = document.querySelector('.buttons')
const addWord = document.querySelector('.addWord')
const sectionNewgame = document.querySelector('.new__game')
const canvas = document.querySelector('.new__game--canvas')
const containerWord = document.getElementById('container')
const textarea = document.getElementById('textarea')

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
    let word = getAWordRandom()
    createInput(containerWord, word.length)
    drawVerticalLine(canvas)
})

// save a new word
newWordBtn.addEventListener('click', () => {
    console.log(saveNewWord(getAWordRandom(), textarea.value))
})