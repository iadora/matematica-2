const aumentarfonte = document.getElementById("aumentar-fonte")
const body = document.body;
let fontSize =16;

aumentarfonte.addEventListener("click",()=>{
    fontSize +=2;
    body.style.fontSize = fontSize + "px";
})
const diminuirfonte = document.getElementById("diminuir-fonte")

diminuirfonte.addEventListener("click", ()=>{
    fontSize-=2;
body.style.fontSize = fontSize + "px";
})

const botaoModoEscuro = document.getElementById("modo-escuro")

botaoModoEscuro.addEventListener("click", ()=>{
    body.classList.toggle("dark-mode");
})