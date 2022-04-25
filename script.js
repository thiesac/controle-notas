let listaNotas = [];
let soma = 0;

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
        calculaMedia();
        situacaoAluno();
    }
}
//encontra a maior nota da lista
function maiorNota() {
    let listaNumeros = listaNotas.map(str => {
        return Number(str);
    })
    document.getElementById("h3MaiorNota").innerText = Math.max(listaNumeros);
}

function calculaMedia() {
    let media = (soma / listaNotas.length);
    document.getElementById("h3Media").innerText = media.toFixed(2);
}

function situacaoAluno() {
    let imprimeSituacao = document.getElementById("h3Situacao");
    
    if (calculaMedia() < 4) {
        imprimeSituacao.innerText = "ALUNO REPROVADO";
        imprimeSituacao.style.color = "rgb(255, 0, 0)";
    } else if (calculaMedia() == 4 || calculaMedia() < 7) {
        imprimeSituacao.innerText = "ALUNO DE RECUPERAÇÃO";
        imprimeSituacao.style.color = "rgb(250, 253, 15)";
    } else {
        imprimeSituacao.innerText = "ALUNO APROVADO";
        imprimeSituacao.style.color = "rgb(0,128,0)";
    }
}