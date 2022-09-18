export function drawBaseLIne(canvas){
    let context = canvas.getContext("2d")
    
    context.lineWidht = 8;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.fillStyle = "#c1c1c1";
    context.strokeStyle = "#8A3871";

    context.fillRect(600, 900, 300, 30);
    context.beginPath();
    context.moveTo(50, 500);
    context.stroke();
}

export function drawLetterWord(canvas){
    let context = canvas.getContext("2d")

    //
}

// get a word random
export function getAWordRandom(){
    let words = [
        'HTML', 'CSS', 'JAVASCRIPT', 'ALURA'
    ]
    return words[Math.floor(Math.random() * words.length)]
}

// save a new word
export function saveNewWord(word){
    let words = [
        'HTML', 'CSS', 'JAVASCRIPT', 'ALURA'
    ]
    return words.push(word.split(''))
}

// create input 
export function createInput(container, cant){
    let input
    for(let i = 0; i < cant; i++){
        input = document.createElement("input")
        input.classList.add('word__input')
        input.setAttribute('maxlength', 1)
        input.setAttribute('autofocus', true)
        container.appendChild(input)
    }
    return input

}

// draw vertical line
export function drawVerticalLine(canvas){
    let context = canvas.getContext("2d")

    context.lineWidht = 5
    context.strokeStyle = '#000'
    context.beginPath()
    context.moveTo((canvas.width / 2), (canvas.height-300))
    context.lineTo((canvas.width / 2), (canvas.height - 1500))
    context.stroke()
}

