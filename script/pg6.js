function acesso(){
    var recnome = document.dados.nome.value;
    var recidade = document.dados.idade.value;

    if(recidade >= 18 && recidade < 110){
        alert(recnome+" você tem "+recidade+" anos.\nParabéns, agora vá tomar no cu");
        window.location = "pg4.html";
    }else if(recidade >= 110) {
        alert("você tem "+recidade+" anos? Sério mesmo? Vá pra puta que o pariu");
    }else {
        alert(recnome+" você tem "+recidade+" e não pode entrar na porra do site");
    }
}