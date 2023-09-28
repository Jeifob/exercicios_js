
function validateForm() {
    
    var numeroA = parseFloat(document.getElementById("numeroA").value);
    var numeroB = parseFloat(document.getElementById("numeroB").value);

    if (numeroB > numeroA) {
        return true; 
    } else {
        alert("Número B deve ser maior que número A");
        return false;
    }
}

function validarForm() {
    var valorA = parseFloat(document.getElementById("campoA").value);
    var valorB = parseFloat(document.getElementById("campoB").value);

    if (valorB > valorA) {
    document.getElementById("mensagem").innerHTML = "Formulário válido: B é maior que A!";
    } else {
    document.getElementById("mensagem").innerHTML = "Formulário inválido: B deve ser maior que A!";
    }
}
