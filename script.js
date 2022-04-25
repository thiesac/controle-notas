let listaNotas = [];
let soma = 0;
let media = 0;

function adicionarNota() {
    soma = 0;
    let nota = document.getElementById("input-nota").value;
    
    if (nota == "") {
        alert("Campo não preenchido!");
    } else {
        listaNotas.push(nota);
        for (let i = 0; i < listaNotas.length; i++) {
            soma += parseFloat(listaNotas[i]);
        }
        //imprime lista de notas na tela e limpa campo
        document.getElementById("input-nota").value = "";
        document.getElementById("h3Notas").innerText = listaNotas.join(" | ");
        maiorNota();
        menorNota();
        calculaMedia();
        situacaoAluno();
    }
}
//encontra a maior nota da lista
function maiorNota() {
    maior = Math.max(...listaNotas);
    document.getElementById("h3MaiorNota").innerText = maior;
}

//encontra menor nota da lista
function menorNota() {
    menor = Math.min(...listaNotas);
    document.getElementById("h3MenorNota").innerText = menor;
}
//calcula média das notas
function calculaMedia() {
    media = (soma / listaNotas.length);
    document.getElementById("h3Media").innerText = media.toFixed(2);
}
//imprime se aluno reprovou, ficou de recuperação ou passou
function situacaoAluno() {
    let imprimeSituacao = document.getElementById("h3Situacao");
    
    if (media < 4) {
        imprimeSituacao.innerText = "ALUNO REPROVADO";
        imprimeSituacao.style.color = "rgb(255, 0, 0)";
    } else if (media == 4 || media < 7) {
        imprimeSituacao.innerText = "ALUNO DE RECUPERAÇÃO";
        imprimeSituacao.style.color = "rgb(250, 253, 15)";
    } else {
        imprimeSituacao.innerText = "ALUNO APROVADO";
        imprimeSituacao.style.color = "rgb(0,128,0)";
    }
}