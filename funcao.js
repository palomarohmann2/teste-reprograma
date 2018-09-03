function verificaResposta() {
    var pergunta1 = document.getElementsByName("pergunta1");
    var acertos = 0;

    for(i = 0; i < pergunta1.length; i++) {
      if(pergunta1[i].checked) {
        if(pergunta1[i].value == 2) {
          acertos++;
        }
      }
    }

    var pergunta2 = document.getElementsByName("pergunta2");
    for(i = 0; i < pergunta2.length; i++) {
      if(pergunta2[i].checked) {
        if(pergunta2[i].value == 2) {
          acertos++;
        }
      }
    }

    var pergunta3 = document.getElementsByName("pergunta3");
    for(i = 0; i < pergunta3.length; i++) {
      if(pergunta3[i].checked) {
        if(pergunta3[i].value == 1) {
          acertos++;
        }
      }
    }

  document.getElementById("resultado").innerHTML = "Você acertou " + acertos + " perguntas.";
}
