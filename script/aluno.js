function calc(){
    let getNome = document.aluno.nome.value;
    let getNota1 = document.aluno.nota1.value;
    let getNota2 = document.aluno.nota2.value;
    let getNota3 = document.aluno.nota3.value;
    let getFaltas = document.aluno.faltas.value;

    let media = (Number(getNota1) + Number(getNota2) + Number(getNota3))/3;

    if (getFaltas <= 25) {
        if (media >= 7) {
            alert("Aluno "+getNome+" aprovado.\nMedia: "+media+".\nFaltas: "+getFaltas+"%");
        }else if(media >= 4){
            alert("Aluno "+getNome+" em recuperação.\nMedia: "+media+".\nFaltas: "+getFaltas+"%");
        }else {
            alert("Aluno "+getNome+" reprovado por notas.\nMedia: "+media+".\nFaltas: "+getFaltas+"%");
        }
    }else {
        alert("Aluno "+getNome+" reprovado por excesso de faltas.\nMedia: "+media+".\nFaltas: "+getFaltas+"%");
    }

    // switch (getFaltas) {
    //     case getFaltas <= 75:
    //         switch (media) {
    //             case media >= 7:
    //                 alert("Aluno "+getNome+" aprovado.\nMedia: "+media+".\nFaltas: "+getFaltas+".");
    //                 break;
            
    //             case media < 7:
    //                 if (media >= 4) {
    //                     alert("Aluno "+getNome+" em recuperação.\nMedia: "+media+".\nFaltas: "+getFaltas+".");
    //                 }else {
    //                     alert("Aluno "+getNome+" reprovado.\nMedia: "+media+".\nFaltas: "+getFaltas+".");
    //                 }
    //                 break;
    //         }
    //         break;
    
    //     case getFaltas > 75:
    //         alert("Aluno "+getNome+" reprovado por excesso de faltas.\nMedia: "+media+".\nFaltas: "+getFaltas+".");
    //         break;
    // }
}
