import { addOrRemoveClassToElement } from './screens.js'
import { drawBaseLIne, drawLetterWord, getAWordRandom, createInput, saveNewWord, drawLine, drawCircle } from './canvas.js'

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
const errors = document.getElementById('errors')

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
    let word = getAWordRandom().toUpperCase()
    
    addOrRemoveClassToElement(newGameBtn, 'hidden')
    createInput(containerWord, word.length)
    
    
    for (let i = 0; i < containerWord.childElementCount; i++) {
        containerWord.children[i].addEventListener('keyup', e => {
            let mayus = e.getModifierState && e.getModifierState( 'CapsLock' )
            if(mayus != true){
                alert('Active la tecla Bloq Mayus')
            }else{
                if(e.target.value === word[i]){
                    errors.children[1].innerText += e.target.value
                    errors.children[1].classList.add('good')
                }else{
                    //console.log(e.target.value)
                    errors.children[0].innerHTML += `<span>${e.target.value}</span>`
                    errors.children[0].toUpperCase
                    errors.children[0].classList.add('bad')

                    for (let j = 0; j < errors.children[0].childNodes.length; j++) {
                        switch(i){
                            case 0:
                                drawLine(canvas, (canvas.width / 2), (canvas.height-300), (canvas.width / 2), (canvas.height - 1500))              
                                break;
                            case 1: 
                                drawLine(canvas, (canvas.width / 2), 0, 1000, 0)
                                break;
                            case 2:
                                drawLine(canvas, 1000, 0, 1000, 100)
                                  break;
                            case 3:
                                drawCircle(canvas)
                                break;
                            case 4:
                                drawLine(canvas, 1000, 600, 1000, 200)
                                break;
                            case 5:
                                drawLine(canvas, 900, 800, 1000, 600)
                                break;
                            case 6:
                                drawLine(canvas, 1100, 800, 1000, 600)
                                break;

                            case 7:
                                drawLine(canvas, 1100, 500, 1000, 300)
                                break;
                            case 8:
                                drawLine(canvas, 900, 500, 1000, 300)
                                break;
                        }
                        if(errors.children[0].childNodes.length === word.length){
                            console.log('Perdiste')
                        }
                    }
                }
            }
        })
    }

     
    
    // main line
    //drawLine(canvas, (canvas.width / 2), (canvas.height-300), (canvas.width / 2), (canvas.height - 1500))
    
    //drawLine(canvas, (canvas.width / 2), 0, 1000, 0)
    //drawLine(canvas, 1000, 0, 1000, 100)
    
    //drawCircle(canvas)

    // body
    //drawLine(canvas, 1000, 600, 1000, 200)
    // left leg
    //drawLine(canvas, 900, 800, 1000, 600)

    // right leg
    //drawLine(canvas, 1100, 800, 1000, 600)

    // right arm
    //drawLine(canvas, 1100, 500, 1000, 300)
    // left arm
    //drawLine(canvas, 900, 500, 1000, 300)
})

// save a new word
newWordBtn.addEventListener('click', () => {
    console.log(saveNewWord(getAWordRandom(), textarea.value))
})