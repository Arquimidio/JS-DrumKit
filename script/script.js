let listaTeclas = document.getElementsByClassName('tecla')

document.addEventListener('keypress', keydownEffect)
document.addEventListener('keyup', keyUpClearEffect)

function keydownEffect(e){
    let key = document.getElementById(e.key.toLowerCase())
    if (key) key.className = "tecla playing"
    new Audio(`../sounds/${e.key.toLowerCase()}.wav`).play()
}

function keyUpClearEffect(e){
    let key = document.getElementById(e.key.toLowerCase())
    if (key) key.className = "tecla"
}