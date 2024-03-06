let number = parseInt(prompt("Di un numero del 1 al 10 y ganale a la computadora"));
let random = Math.floor(Math.random() * 10);

let times = "0";

while(true){


times++;

if (number != random) {
    number = parseInt(prompt("NOP! tu dijiste " + number + " y no lo era; di otro numero del 1 al 10 y ganale a la computadora. Lo has intentado: " + times));
    
} else {
    alert("Acertaste en " + times + " veces. El numero RANDOM era: "+random);
    break;
}
}
