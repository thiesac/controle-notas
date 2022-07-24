let listaNotas = [];
let soma = 0;
let media = 0;

function adicionarNota() {
    soma = 0;
    let nota = document.getElementById("input-nota").value;

    if (nota == "") {
        alert("Campo não preenchido!");
    } else {
        nota = parseFloat(nota);
        listaNotas.push(nota);
        for (let i = 0; i < listaNotas.length; i++) {
            soma += listaNotas[i];
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

    return menor;
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

//finaliza notas e leva para área da nota substitutiva
function finalizar() {
    document.getElementById("esconde").style.display = "none";
    document.getElementById("esconde2").style.display = "none";
    document.getElementById("revela").style.display = "block"
}

//pega nota da prova substitutiva e substitui pela menor nota ou mantém a anterior, caso resultado não tenha sido atingido
function substitutiva() {
    soma = 0;
    let pegaSubst = document.getElementById("input-subst").value;
    let indexNota = listaNotas.indexOf(menorNota()); //encontra index da menor nota

    if (pegaSubst == "") {
        alert("Campo não preenchido!")
    } else {
        pegaSubst = parseFloat(pegaSubst)
        //listaNotas.push(pegaSubst);

        if (pegaSubst > listaNotas[indexNota]) {
            listaNotas[indexNota] = pegaSubst;
        }

        for (let i = 0; i < listaNotas.length; i++) {
            soma += parseFloat(listaNotas[i]);
        }
        novaMedia();

        document.getElementById("input-subst").value = "";
        document.getElementById("h3Notas").innerText = listaNotas.join(" | ");
    }
}

function novaMedia() {
    let novaMedia = (soma / listaNotas.length);
    document.getElementById("novaMedia").innerText = novaMedia.toFixed(2);
}
