//IZVADA TAVU TAGADĒJO VECUMU

function getFormattedDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
    }
    document.getElementById('datums').textContent = getFormattedDate()



//SPĒLE
let target = document.getElementById("target");
    let gameArea = document.getElementById("gameArea");
    let timeDisplay = document.getElementById("time");
    let scoreDisplay = document.getElementById("score");
    
    let score = 0;
    let timeLeft = 1.5;
    let timer;
    
    // Funkcija, kas parāda kvadrātu random vietā
    function showTarget() {
        let maxX = gameArea.clientWidth - 50;
        let maxY = gameArea.clientHeight - 50;
    
        let x = Math.random() * maxX;
        let y = Math.random() * maxY;
    
        target.style.left = x + "px";
        target.style.top = y + "px";
        target.style.display = "block";
    
        resetTimer();
    }
    
    // Timeris (1.5 sekundes)
    function resetTimer() {
        clearInterval(timer);
        timeLeft = 1.5;
        timeDisplay.textContent = timeLeft;
    
        timer = setInterval(() => {
            timeLeft--;
            timeDisplay.textContent = timeLeft;
    
            if (timeLeft <= 0) {
                clearInterval(timer);
                endGame();
            }
        }, 1000);
    }
    
    // Klikšķis uz kvadrāta
    target.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        showTarget();
    });
    
    // Beigt spēli
    function endGame() {
        target.style.display = "none";
        alert("Spēle beigusies! Punkti: " + score);
    }
    
    // Sāk spēli
    showTarget();