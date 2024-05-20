/* STRICT MODE */
"use strict";

console.log("Lo script funziona correttamente")

let timerSecond = 10;

//scriviamo una funzione che esegue il conto alla rovescia 
function contoRovescio() {

    //CONDIZIONE SE TIMER SECOND E' MAGGIORE DI 0 
    if (timerSecond > 0) {

        console.log(timerSecond);

        //MANIPOLIAMO IL DOM
        document.getElementById('countdown').innerText = timerSecond;

        timerSecond--;
        //QUANDO SARA' ARRIVATO A 0 CI STAMPERA BUON ANNO IN CONSOLE
    } else document.getElementById('countdown').innerText = "Buon Anno!";

}

//Eseguiamo la funzione contoRovescio ogni secondo
let timer = setInterval(contoRovescio, 1000);
