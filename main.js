
let gameStart = false;

// need to test this boolean value
let writingText = false;

document.addEventListener('keyup', function(event) {
  if ((event.key == 'Enter') && (gameStart == false)) {
      gameStart = true;
      startGame();
    
  }
  
});

document.addEventListener('keyup', function(event) {
  if ((event.key == 'c') && (gameStart == true)) {
      document.getElementById("content").innerHTML += document.getElementById("commands").innerHTML
    
  }
  
});

function startGame() {
  //testing
  document.getElementById("content").innerHTML += '<hr>'; //add a line break after game start
  typeWriter("startText", "content", 50); //write the starting text of the game
  document.getElementById("content").innerHTML += document.getElementById("commands").innerHTML //print out the commands list for the first time



}

// make a function for all keypresses
// make a function that instantly finsishes text when typewriting
// 

// Typewriter function
// "text": id of the text block
// "targetElement": html paragraph that will be changed 
function typeWriter(text, targetElement, speed) {
    textCon = document.getElementById(text).textContent;  
    //document.getElementById(targetElement).innerHTML += textCon;
    
    let i = 0;
    let timer = setInterval(() => {
      if (i < textCon.length) {
        const char = textCon.charAt(i);
        writingText = true;
        if (char === '\n') {
          document.getElementById(targetElement).innerHTML += '<br>'; // Add a line break
        } else {
          document.getElementById(targetElement).innerHTML += char;
        }
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    writingText = false;
}
  