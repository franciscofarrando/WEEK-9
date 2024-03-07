player1 = Math.floor(Math.random() * 6)+1;
player2 = Math.floor(Math.random() * 6)+1;


while(true){

    if (player1 > player2) {
        alert("GANO PLAYER 1 con: " + player1 + " sobre PLAYER 2 con: " + player2);
        break;
    }else if (player1 < player2) {
        alert("GANO PLAYER 2 con: " + player2 + " sobre PLAYER 1 con: " + player1);
        break;  

    } else{
        alert("Empate. PLAYER 1: " + player1 + " y PLAYER 2: " +player2);
        break;
    }
}