function Resposta() {
    let res = document.querySelector('#input1').value;

    switch(res.toLowerCase()) {
        case "a":
            document.querySelector("#resposta1").innerHTML = "Errada";
            break;
        case "b":
            document.querySelector("#resposta1").innerHTML = "Errada";
            break;
        case "c":
            document.querySelector("#resposta1").innerHTML = "Correto";
            break;
        default:
            document.querySelector("#resposta1").innerHTML = "Valor não aceito";
            break;
    }
}

function Resposta1() {
    let res = document.querySelector('#input2').value;
    
    switch(res.toLowerCase()) {
        case "a":
            document.querySelector("#resposta2").innerHTML = "Errada";
            break;
        case "b":
            document.querySelector("#resposta2").innerHTML = "Correto";
            break;
        case "c":
            document.querySelector("#resposta2").innerHTML = "Errada";
            break;
        default:
            document.querySelector("#resposta2").innerHTML = "Valor não aceito";
            break;
    }
}
