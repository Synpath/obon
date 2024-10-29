
let gameStart = false;
let writingText = false;

//start the game
document.addEventListener('keyup', function(event) {
  if (((event.key == 'Enter') && (!gameStart)) && (!writingText)) {
      gameStart = true;
      startGame();
    
  }
  
});

//print out commands list
document.addEventListener('keyup', function(event) {
  if (((event.key == 'c') && (gameStart)) && (!writingText)) {
      document.getElementById("content").innerHTML += document.getElementById("commands").innerHTML 
  }
});

function startGame() {
  document.getElementById("content").innerHTML += '<hr>'; //add a divider after game start
  typeWriter("startText", "content", 50); //write the starting text of the game
  document.getElementById("content").innerHTML += document.getElementById("commands").innerHTML //print out the commands list for the first time



}

// Typewriter function
// "text": id of the text block
// "targetElement": html paragraph that will be changed 
function typeWriter(text, targetElement, speed) {
    textCon = document.getElementById(text).textContent;  
    //document.getElementById(targetElement).innerHTML += textCon;
    writingText = true;
    let i = 0;
    let timer = setInterval(() => {
      if (i < textCon.length) {
        const char = textCon.charAt(i);
        if (char === '\n') {
          document.getElementById(targetElement).innerHTML += '<br>'; // Add a line break
        } else {
          document.getElementById(targetElement).innerHTML += char;
        }
        i++;
      } else {
        clearInterval(timer);
        writingText = false;
      }
    }, speed);
}
  