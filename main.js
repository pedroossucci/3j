const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");

const  tempoObjetivo1 = new Date(2024,11,30);
const  tempoObjetivo2 = new Date(2024,11,30);

function calculaTempo(tempoObjetivo){
    const agora = new Date()
    let segundos
    let minutos
    let horas
    let dia
    segundos = ((tempoObjetivo-agora)/1000)
    minutos = segundos/60
    horas = minutos/60
    dias = horas/24
    segundos = Math.floor(segundos);
    minutos = Math.floor(minutos);
    horas = Math.floor(horas)
    dias = Math.floor(dias)

    segundos = segundos%60
    minutos = minutos%60
    horas = horas%24

    if(segundos >= 0){
    return `faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
    } else {  
        return 'Prazo Finalizado!'   
    }

}

  tempo[0].textContent = calculaTempo (tempoObjetivo1);
  tempo[1].textContent = calculaTempo (tempoObjetivo2); 


for(let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
