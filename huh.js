function poga(){
    const ievaditieDati=document.getElementById("ievade").value 
    const papildus=`Labdien, ${ievaditieDati}! `

    const izveletaKrasa=document.getElementById("krasa").value

    if(document.getElementById("atdzime").checked){            //Nokrāsos tekstu ja būs noķeksēts kvadrātiņš
        document.getElementById("izvade").style.color=izveletaKrasa
    }else {
        document.getElementById("izvade").style.color="black"
    }
    
    //alert(ievaditieDati)
    document.getElementById("izvade").innerHTML =papildus    
    //document.getElementById("izvade").innerHTML =izveletaKrasa   

}


function parveido(){
    const kursUzUsd=1.18
    const sk=document.getElementById("nauda").value 

    if(document.getElementById("otradi").checked){            //Nokrāsos tekstu ja būs noķeksēts kvadrātiņš
        document.getElementById("citanauda").innerHTML=(sk/kursUzUsd).toFixed(2)+"€"
    }else {
        document.getElementById("citanauda").innerHTML=(sk*kursUzUsd).toFixed(2)+"$"
    }
}


function teikums(){
    if(document.getElementById("klase10").checked){
        document.getElementById("radio_klase").innerHTML="Tu mācies 10.klasē"
    }
     else if(document.getElementById("klase11").checked){
        document.getElementById("radio_klase").innerHTML="Tu mācies 11.klasē"
     }
    else{
        document.getElementById("radio_klase").innerHTML="Tu mācies 12.klasē"
    }

}