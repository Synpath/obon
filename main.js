
let gameStart = false;
let writingText = false;
let isSkipping = false;
let isChoosing = false;
let currentGrave = null;
let bookOpen = false;

//start the game
// Doesn't fire if the game has already started and the game is writing text
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

//open book
document.addEventListener('keyup', function(event) {
  if ((event.key == "e") && (!writingText)) {
      console.log("book opened");
      
      const bookContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <!-- change the font size to be bigger -->
      <style>
        body {
          font-family: "Courier New";
          background-color: black;
          color: white;
        }
        </style>
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <title> Book </title>
    </head>
    <body>
    <h1>Book!</h1>
    <p>
      Book opened: :D
    </p>
    </body>
    </html>
  `;
  
  //create the blob/URL
  const blob = new Blob([bookContent], { type: 'text/html'});
  const url = URL.createObjectURL(blob);
  
  const popup = window.open(url, 'Popup Window', 'width=400,height=400');

  const interval = setInterval(function() {
    if (popup.closed) {
      clearInterval(interval);
      URL.revokeObjectURL(url);
      console.log("Book popup closed");
    }
  }, 100);
  }
});

// event handlers for choosing the number of the grave
function chooseGrave() {
  return new Promise( (resolve) => {
    document.addEventListener('keyup', function(event) {
    if ((!writingText) && (gameStart)) {
      if ((event.key == '1') && (currentGrave == null)) {
        document.getElementById("content").innerHTML += '<hr>'; //add a divider after choosing a grave
        currentGrave = 1;
        resolve();
      }
    
      if ((event.key == '2') && (currentGrave == null)) {
        document.getElementById("content").innerHTML += '<hr>'; //add a divider after choosing a grave
        currentGrave = 2;
        resolve();
      }
    
      if ((event.key == '3') && (currentGrave == null)) {
        document.getElementById("content").innerHTML += '<hr>'; //add a divider after choosing a grave
        currentGrave = 3;
        resolve();
      }
    
      if ((event.key == '5') && (currentGrave == null)) {
        document.getElementById("content").innerHTML += '<hr>'; //add a divider after choosing a grave
        currentGrave = 5;
        resolve();
      }
    
      if ((event.key == '6') && (currentGrave == null)) {
        document.getElementById("content").innerHTML += '<hr>'; //add a divider after choosing a grave
        currentGrave = 6;
        resolve();
      }
    
      if ((event.key == '7') && (currentGrave == null)) {
        document.getElementById("content").innerHTML += '<hr>'; //add a divider after choosing a grave
        currentGrave = 7;
        resolve();
      }
    
      if ((event.key == '8') && (currentGrave == null)) {
        document.getElementById("content").innerHTML += '<hr>'; //add a divider after choosing a grave
        currentGrave = 8;
        resolve();
      }
    }
    });
  });
}

function startGame() {
  document.getElementById("content").innerHTML += '<hr>'; //add a divider after game start
  document.getElementById("content").innerHTML += document.getElementById("commands").innerHTML //print out the commands list for the first time
  test();
}

async function test() {
  try {
    await typeWriter("startText", "content", 50);
    await skipText(0, "chooseGrave", "content");
    await chooseGrave();
  } catch (error) {
    console.error("Error:", error);
  }
}

// write a character to an html element
function writeText(char, target) {
  return new Promise( (resolve) => {
    if (char === '\n') {
      document.getElementById(target).innerHTML += '<br>'; // Add a line break
    } else {
      document.getElementById(target).innerHTML += char;
    }
    resolve();
  });
}

// print the rest of the text with no typewriter effect
function skipText(num, content, target) {
  return new Promise( (resolve) => {
  text = document.getElementById(content).textContent;
    for (num; num < text.length; num++) {
      const char = text.charAt(num);
      writeText(char, target);
    }
    resolve();
  });
  
}

// Typewriter function
// "text": id of the text block
// "targetElement": html paragraph that will be changed 
function typeWriter(text, targetElement, speed) {
    
  return new Promise((resolve) => {
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
        resolve();
      } else {
        clearInterval(timer);
        writingText = false;
        resolve();
      }
    }, speed);
  });
}
  