export function drawBaseLIne(canvas){
    let context = canvas.getContext("2d")
    
    context.lineWidht = 8;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.fillStyle = "#F3F5F6";
    context.strokeStyle = "#8A3871";

    context.fillRect(450, 900, 300, 30);
    context.beginPath();
    context.moveTo(50, 500);
    context.stroke();
}

export function drawLetterWord(canvas){
    let context = canvas.getContext("2d")

    //
}

export function getAWordRandom(){
    let words = [
        'HTML', 'CSS', 'JAVASCRIPT', 'ALURA'
    ]
    return words[Math.floor(Math.random() * words.length)]
}

export function createInput(container, cant){
    let input
    for(let i = 0; i < cant.length; i++){
        input = document.createElement("input")
        input.classList.add('word__input')
        input.setAttribute('maxlength', 1)
        input.setAttribute('autofocus', true)
        container.appendChild(input)
    }
}


