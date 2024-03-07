
   
   function infoCaption1(){
   let player1 = Math.floor(Math.random() * 6)+1;
    document.getElementById("result1").innerHTML = player1;
    return player1;
   }

    function infoCaption2(){
    let player2 = Math.floor(Math.random() * 6)+1;
    document.getElementById("result2").innerHTML = player2;
    return player2;

}

function finalResult() {
    let player1 = infoCaption1();
    let player2 = infoCaption2();

        if (player1 > player2) {
            document.getElementById("resultado").innerHTML = ("GANO PLAYER 1 con: " + player1 + " sobre PLAYER 2 con: " + player2);
           
        }else if (player1 < player2) {
            document.getElementById("resultado").innerHTML = ("GANO PLAYER 2 con: " + player2 + " sobre PLAYER 1 con: " + player1);
           

        } else{
            document.getElementById("resultado").innerHTML = ("Empate. PLAYER 1: " + player1 + " y PLAYER 2: " +player2);
            
        }
    }
    finalResult();

