//IZVADA ŠODIENAS DATUMU

function getFormattedDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
    }
document.getElementById('datums').textContent = getFormattedDate()


//VECUMS


function fromNow(date) {
    var mTimes = new Date(date);
    var fromTimes = Date.now() - mTimes.valueOf();
    return Math.floor(fromTimes / (24 * 60 * 60 * 1000));
}


const poga = document.getElementById("poga");
const vecumaInputs = document.getElementById("vecums");
const rezultataParade = document.getElementById("rezultats");

poga.addEventListener("click", function() {
    
    let dzimsanasDatums = vecumaInputs.value;
    
    
    if (dzimsanasDatums === "") {
        rezultataParade.innerHTML = "Lūdzu, ievadi dzimšanas datumu!";
        return;
    }
    
    
    let dienas = fromNow(dzimsanasDatums);
    
    
    rezultataParade.innerHTML = "Tev ir " + dienas + " dienas!";
});


//SPĒLE




let target = document.getElementById("target");
let gameArea = document.getElementById("gameArea");
let timeDisplay = document.getElementById("time");
let scoreDisplay = document.getElementById("score");
        
let score = 0;
let timeLeft = 1.5;
let timer;
let active = false;
        
// sākuma poga 
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
        
// parāda kvadrātu
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
        
// taimeris
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
        
// klikšķis
target.addEventListener("click", function() {
    if (!active) return;
            
    score++;
    scoreDisplay.textContent = score;
    showTarget();
});
     
// Beigt spēli
function endGame() {
    active = false;
    clearInterval(timer);
    target.style.display = "none";
    
    // MASĪVS 

    const atdzime=["1","2","3","4","5","6","7","8","9","10"];
    let vertejums = "";
    
    if(score <16){
        vertejums=atdzime[0];
    }else if(score <31){
        vertejums=atdzime[1];
    }else if(score <46){
        vertejums=atdzime[2];
    }else if(score <61){
        vertejums=atdzime[3];
    }else if(score <76){
        vertejums=atdzime[4];
    }else if(score <91){
        vertejums=atdzime[5];
    }else if(score <106){
        vertejums=atdzime[6];
    }else if(score <121){
        vertejums=atdzime[7];
    }else if(score <136){
        vertejums=atdzime[8];
    }else {
        vertejums=atdzime[9];
    }

    
    alert("Spēle beigusies! Punkti: " + score + " un Jūsu vērtējums ir " + vertejums);
    
    let startBtn = document.querySelectorAll(".palaist")[0];
    startBtn.disabled = false;
    startBtn.innerHTML = "Sākt spēli";
}
   

target.style.display = "none";



