//IZVADA ŠODIENAS DATUMU

function getFormattedDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
    }
document.getElementById('datums').textContent = getFormattedDate()



//SPĒLE




// Mainīgie
let target = document.getElementById("target");
let gameArea = document.getElementById("gameArea");
let timeDisplay = document.getElementById("time");
let scoreDisplay = document.getElementById("score");
        
let score = 0;
let timeLeft = 1.5;
let timer;
let active = false;
        
// Sākuma poga (pēc tava piemēra)
document.querySelectorAll(".palaist")[0].addEventListener("click", function() {
    let pogaTeksts = this.innerHTML;
            
    if (pogaTeksts === "Sākt spēli") {
        active = true;
        score = 0;
        scoreDisplay.textContent = "0";
        target.style.display = "none";
        showTarget();
        this.disabled = true;
        this.innerHTML = "Spēlē...";
    }
});
        
// Funkcija kas parāda kvadrātu
function showTarget() {
    if (!active) return;
            
    let maxX = gameArea.clientWidth - 45;
    let maxY = gameArea.clientHeight - 45;
            
    if (maxX < 0) maxX = 0;
    if (maxY < 0) maxY = 0;
            
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;
            
    target.style.left = x + "px";
    target.style.top = y + "px";
    target.style.display = "block";
            
    resetTimer();
}
        
// Timeris
function resetTimer() {
    clearInterval(timer);
    timeLeft = 1.5;
    timeDisplay.textContent = timeLeft.toFixed(1);
            
    timer = setInterval(function() {
    if (!active) return;
            
    timeLeft -= 0.1;
    timeDisplay.textContent = timeLeft.toFixed(1);
            
    if (timeLeft <= 0) {
        endGame();
    }
}, 100);
}
        
// Klikšķis uz kvadrāta
target.addEventListener("click", function() {
    if (!active) return;
            
    score++;
    scoreDisplay.textContent = score;
    showTarget();
});
     
//MASĪVS

const bales=["(10-8)","(7-5)","(4-2)","(1-0)"];

let vertejums="";

if (score<=10 ){
   vertejums=bales[3];
}
else if(score<62){
    vertejums=bales[2];
}

else if(score<113){
    vertejums=bales[1];
}

else{
    vertejums=bales[0];
}

// Beigt spēli
function endGame(vertejums) {
    active = false;
    clearInterval(timer);
    target.style.display = "none";
    alert("Spēle beigusies! Punkti: " + score + vertejums );
            
    let startBtn = document.querySelectorAll(".palaist")[0];
    startBtn.disabled = false;
    startBtn.innerHTML = "Sākt spēli";
}
   
// Sākotnējais stāvoklis
target.style.display = "none";



console.log(vertejums)
