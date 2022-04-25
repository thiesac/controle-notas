let listaNotas = [];
let soma = 0

function adicionarNota() {
    soma = 0;
    let nota = document.getElementById("input-nota").value;
    
    if (nota == "") {
        alert("Campo não preenchido!");
    } else {
        listaNotas.push(nota);
        for (let i = 0; i < listaNotas.length; i++) {
            soma += parseFloat(listaNotas[i]);
            alert(soma)
    }
    }
}