
let gameStart = false;
let writingText = false;
let gameEnd = false;
let isSkipping = false;

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

// skip text writing
document.addEventListener('keyup', function(event) {
  if ((event.key == " ") && (writingText)) {
      isSkipping = true;
  }
});

function startGame() {
  document.getElementById("content").innerHTML += '<hr>'; //add a divider after game start
  document.getElementById("content").innerHTML += document.getElementById("commands").innerHTML //print out the commands list for the first time
  typeWriter("startText", "content", 50);
    writeText('\n', "content");
    skipText(0, "chooseGrave", "content");
    console.log("Hello");
  
}

function writeText(char, target) {
  if (char === '\n') {
    document.getElementById(target).innerHTML += '<br>'; // Add a line break
  } else {
    document.getElementById(target).innerHTML += char;
  }
}

//
function skipText(num, content, target) {
  text = document.getElementById(content).textContent;
  for (num; num < text.length; num++) {
    const char = text.charAt(num);
    writeText(char, target);
  }
}

// Typewriter function
// "text": id of the text block
// "targetElement": html paragraph that will be changed 
async function typeWriter(text, targetElement, speed) {
    textCon = document.getElementById(text).textContent;  
    writingText = true;
    
    let i = 0;
    let timer = setInterval(() => {
      if ((i < textCon.length) && (!isSkipping)) {
        const char = textCon.charAt(i);
        writeText(char, targetElement);
        i++;
      } else if (isSkipping) {
        clearInterval(timer);
        skipText(i, text, targetElement);
        writingText = false;
        isSkipping = false;
      } else {
        clearInterval(timer);
        writingText = false;
      }
    }, speed);

}
  