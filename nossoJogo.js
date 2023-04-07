/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    console.log("Bem-vindo(a) ao jogo de blackjack");

    let jogo = confirm("Quer iniciar uma nova rodada?");

    if (jogo) {
      let cartaUserUm = comprarCarta();
      let cartaUserDois = comprarCarta();
      let cartaPcUm = comprarCarta();
      let cartaPcDois = comprarCarta();

      let resultadoCartasUsuario = cartaUserUm.valor + cartaUserDois.valor;
      let rCartasComputador = cartaPcUm.valor + cartaPcDois.valor;

      console.log(`Usuário - cartas: ${cartaUserUm.texto} ${cartaUserDois.texto} - pontuação é ${resultadoCartasUsuario}`);
      console.log(`Computador - cartas: ${cartaPcUm.texto} ${cartaPcDois.texto} - pontuação é ${rCartasComputador}`);

      if (resultadoCartasUsuario > rCartasComputador) {
        console.log("O usuário ganhou!");
      } else if (rCartasComputador > resultadoCartasUsuario) {
        console.log("O computador ganhou!");
      } else {
        console.log("Empate!");
      }
    } else {
      console.log("O jogo acabou");
    }