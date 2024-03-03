const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let colorIndex = 0;
let intervalID = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];     
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalID);
}
// declarar um objeto que contem metodos (função como elemento do objeto)
const turnOn = {
    'red': () => img.src = "./imagens/semaforo-vermelho.jpg",
    'yellow': () => img.src = "./imagens/semaforo-amarelo.jpg",
    'green': () => img.src = "./imagens/semaforo-verde.jpg",
    'automatico': () => intervalID = setInterval(changeColor, 1000)

}
buttons.addEventListener("click", trafficLight);