   function infoCaption1(){

    player1 = Math.floor(Math.random() * 6)+1;
    document.getElementById("result1").innerHTML = player1;
    return player1;
   }
   


    function infoCaption2(){

    player2 = Math.floor(Math.random() * 6)+1;
    document.getElementById("result2").innerHTML = player2;
    return player2;
}

function finalResult() {
    let player1 = infoCaption1();
    let player2 = infoCaption2();

        if (player1 > player2) {
            document.getElementById("resultado").innerHTML = ("GANO JUGADOR 1 con: " + player1 + " sobre JUGADOR 2 con: " + player2);
            return;           
        }else if (player1 < player2) {
            document.getElementById("resultado").innerHTML = ("GANO JUGADOR 2 con: " + player2 + " sobre JUGADOR 1 con: " + player1);
            return;
        } else{
            document.getElementById("resultado").innerHTML = ("Empate. JUGADOR 1: " + player1 + " y JUGADOR 2: " +player2);
            return;
        }
    }
    finalResult();

