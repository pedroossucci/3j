const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");

const  tempoObjetivo1 = new Date(2024,11,30);
const  tempoObjetivo2 = new Date(2024,11,30);
tempo[0].textContent = tempoObjetivo1
tempo[1].textContent = tempoObjetivo2

const  agora = new Date()

console.log(tempo)
for(let i = 0; 1 < botoes.length ; i++){
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
