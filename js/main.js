/* STRICT MODE */
"use strict";

console.log("Lo script funziona correttamente")

let timerSecond = 10;

//scriviamo una funzione che esegue il conto alla rovescia 
function contoRovescio() {

    if (timerSecond > 0) {

        console.log(timerSecond);
        timerSecond--;
    }

}

//Eseguiamo la funzione contoRovescio ogni secondo
let timer = setInterval(contoRovescio, 1000);
