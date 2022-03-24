let distance = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
console.log("Distanza del percorso: " + 
distance + " km");

if(isNaN(distance) || distance<0){
    alert('Valore non valido, puoi inserire solo 0 o numeri positivi: ricarica la pagina e riprova');
} else if(!isNaN(distance)){document.getElementById('distanza').innerHTML += "Distanza del percorso: " + distance + " km";
}

let age = parseInt(prompt('Quanti anni hai?'));
console.log("La tua età è: " + 
age + " anni");

if(isNaN(age) || age<0){
    alert('Valore non valido, puoi inserire solo 0 o numeri positivi: ricarica la pagina e riprova');
} else if(!isNaN(age)){document.getElementById('age').innerHTML += "La tua età è: " + age + " anni";
}

let price = distance * 0.21;
console.log("Prezzo intero: " + (Math.round(price * 100) / 100).toFixed(2) + " €");

let sale20 = price / 100 * 80;
console.log("Prezzo minorenni: " + (Math.round(sale20 * 100) / 100).toFixed(2) + " €");

let sale40 = price / 100 * 60;
console.log("Prezzo over 65: " + (Math.round(sale40 * 100) / 100).toFixed(2) + " €");

if(age>=0 && age<18){
    document.getElementById('finalprice').innerHTML += "Il prezzo del biglietto è: " + (Math.round(sale20 * 100) / 100).toFixed(2) + " €" ;
} else if(age>=65){
    document.getElementById('finalprice').innerHTML += "Il prezzo del biglietto è: " + (Math.round(sale40 * 100) / 100).toFixed(2) + " €" ;
} else if(isNaN(age) || age<0 || isNaN(distance)){
    alert('Non è stato possibile calcolare il prezzo del biglietto: ripeti la procedura da capo inserendo dei valori validi');
} else{
    document.getElementById('finalprice').innerHTML += "Il prezzo del biglietto è: " + (Math.round(price * 100) / 100).toFixed(2) + " €" ;   
}


