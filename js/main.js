/* STRICT MODE */
"use strict";

console.log("Lo script funziona correttamente")

let timerSecond = 10;

//scriviamo una funzione che esegue il conto alla rovescia 
function contoRovescio() {

    //CONDIZIONE SE TIMER SECOND E' MAGGIORE DI 0 
    if (timerSecond > 0) {

        console.log(timerSecond);
        timerSecond--;
        //QUANDO SARA' ARRIVATO A 0 CI STAMPERA BUON ANNO IN CONSOLE
    } else console.log("Buon Anno!");

}

//Eseguiamo la funzione contoRovescio ogni secondo
let timer = setInterval(contoRovescio, 1000);
