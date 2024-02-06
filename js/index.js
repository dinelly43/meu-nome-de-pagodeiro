mes.onchange = () => {
    switch(mes.value.toLowerCase()){
        case "janeiro":
            nome.innerHTML = "Rei"
        break;
        case "fevereiro":
            nome.innerHTML = "Mô"
        break;
    }
        
}