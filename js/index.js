mes.onchange = () => {
    switch(mes.value.toLowerCase()){
        case "janeiro":
            nome.innerHTML = "Rei"
        break;
        case "fevereiro":
            nome.innerHTML = "Mô"
        break;
        case "março":
            nome.innerHTML = "Cupido"
        break;
        case "abril":
            nome.innerHTML = "Apaixonado"
        break;
        case "maio":
            nome.innerHTML = "Pagodeiro"
        break;
        case "junho":
            nome.innerHTML = "Mensageiro"
        break;
        case "julho":
            nome.innerHTML = "Cara perfeito"
        break;
        case "agosto":
            nome.innerHTML = "Perturbado"
        break;
        case "setembro":
            nome.innerHTML = "Gueri Gueri"
        break;
        case "outubro":
            nome.innerHTML = "Coração"
        break;
        case "novembro":
            nome.innerHTML = "Linda Voz"
        break;
        case "dezembro":
            nome.innerHTML = "Criado Mudo"
        break;
        default:
            nome.innerHTML = "Escolha um mês válido"
    }
}

dia.onchange = () => {
    if(dia.value >= 1 && dia.value <=3){
        nome.innerHTML += "calabreso"
    }
}

