
let gameStart = false;
let isWriting = false;
let isSkipping = false;
let atGrave = false;
let currentGrave = null;
let bookOpen = false;
let isScript = false; //plain text vs from a script
let gravesDone = 0;
let offerings = ['0', 'm', 'p', 'f', '4','k', 'b', 's', 'h']; 
let playerHealth = 7;

//grave text
const action0 = " As you sweep the dust and leaves off the grave,";
const action1 = " As you set out the name tablet,";
const action2 = " As you wipe and polish the stone,"; 
const action3 = " As you place and light sandalwood incense, ";
const action4 = " As you place and arrange chrysanthemum flowers, ";
const action5 = " As you clean the headstone, ";
const action6 = " As you offer rice, fruit, and sake to the grave, ";
const action7 = " As you place and arrange red spider lilies, ";
const actions = [action0, action1, action2, action3, action4, action5, action6, action7];
const start = "\nYou set down your things and begin." + actions[Math.floor(Math.random() * 8)]
let ghostName = "";

//start the game, begin grave tasks, skip text writing
// Doesn't fire if the game has already started and the game is writing text
// 2: fires if currentGrave != null and atGrave = true
document.addEventListener('keyup', function(event) {
  
  if ((event.key == 'Enter') && !isWriting) {
    if (!gameStart) {
      gameStart = true;
      startGame();
    }
  } else if ((event.key == " ") && (isWriting)) {
    isSkipping = true;
  }
});

//open book
//X: gameStart = false, isWriting = true; bookOpen = true; atGrave = true
document.addEventListener('keyup', function(event) {
  if ((!bookOpen) && (gameStart)) {
  if ((event.key == "e") && (!isWriting)) {
      console.log("book opened");

    const bookContent = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
      <style>
        body {
          font-family: "Courier New";
          background-color: black;
          color: white;
        }
        </style>
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <title> Ghosts of the Mountain Shrine </title>
    </head>
    <body>
    
    <div id="content">

    <h1> 山のじんじゃのゆうれい </h1>
    <h3> Ghosts of the Mountain Shrine </h3>
    <p>[Press the left and right arrow keys to navigate between pages]</p>

    </div>

    <script id="page0" type="type/html">
    <h1> 山のじんじゃのゆうれい </h1>
    <h2> Ghosts of the Mountain Shrine </h2>
    <p>[Press the left and right arrow keys to navigate between pages]</p>
    </script>

    <script id="index" type="type/html">
    <h1>Table of Contents</h1>
    <hr>
    <p>
    1: Emperor Sutoku </br>
    2: Sugawara no Michizane </br>
    3: Taira no Masakado </br>
    5: Izumi no Okuni </br>
    6: Empress Suiko </br>
    7: Princess Kazunomiya </br>
    8: Tomoe Gozen </br>
    </p>
    </script>  

    <script id="page1" type="type/html">
      <h1>1: Emperor Sutoku</h1>
      <p>
      Page 1 opened
      </p>
    </script>

    <script id="page2" type="type/html">
    <h1>2: Sugawara no Michizane</h1>
    <p>
    Page 2 opened
    </p>
    </script>

    <script id="page3" type="type/html">
    <h1>3: Taira no Masakado</h1>
    <p>
    Page 3 opened
    </p>
    </script>

    <script id="page5" type="type/html">
    <h1>5: Izumo no Okuni</h1>
    <p>
    Page 5 opened
    </p>
    </script>

    <script id="page6" type="type/html">
    <h1>6: Empress Suiko</h1>
    <p>
    Page 6 opened
    </p>
    </script>

    <script id="page7" type="type/html">
    <h1>7: Princess Kazunomiya</h1>
    <p>
    Page 7 opened
    </p>
    </script>

    <script id="page8" type="type/html">
    <h1>8: Tomoe Gozen</h1>
    <p>
    Page 8 opened
    </p>
    </script>

    <script>
    const pageID = ["page0", "index", "page1", "page2", "page3", "page5", "page6", "page7", "page8"] //0,1,2,3,4,5,6,7,8
    let currentPage = 0;
        document.addEventListener('keyup', function(event) {
            if (event.key == 'ArrowRight') {
            currentPage++;
            
            if (currentPage == 9) {
              currentPage = 0;
            }
            document.getElementById("content").innerHTML = document.getElementById(pageID[currentPage]).innerHTML;
            } else if (event.key == 'ArrowLeft') {
            currentPage--;
            if (currentPage == -1) {
                currentPage = 8;
            }
              document.getElementById("content").innerHTML = document.getElementById(pageID[currentPage]).innerHTML;
            }
      console.log("currentpage is " + currentPage);
        });
    </script>
    </body>
    </html>
    `;

  //create the blob/URL
  const blob = new Blob([bookContent], { type: 'text/html'});
  const url = URL.createObjectURL(blob);
  const popup = window.open(url, 'Popup Window', 'width=500,height=600');
  bookOpen = true; // is the book open right now? (for other key command logic)

  const interval = setInterval(function() {
    if (popup.closed) {
      clearInterval(interval);
      URL.revokeObjectURL(url);
      console.log("Book closed");
      bookOpen = false;
    }
  }, 100);
  }
}
});

function graveEnter(event) {
    if (event.key == 'Enter') {
      graveAction();
    }
}

// choose a grave
document.addEventListener('keyup', function(event) {
  if ((!isWriting) && (gameStart)) { //not writing and game has started
    if ((event.key == '1') && (currentGrave == null)) { 

      currentGrave = 1;
      ghostName = "Emperor Sutoku";
      gravesDone++;
      startGrave();
    } else if ((event.key == '2') && (currentGrave == null)) {   

      currentGrave = 2;
      ghostName = "Sugawara no Michizane";
      gravesDone++;
      startGrave();
    } else if ((event.key == '3') && (currentGrave == null)) {

      currentGrave = 3;
      ghostName = "Taira no Masakado";
      gravesDone++;
      startGrave();
    } else if ((event.key == '5') && (currentGrave == null)) {

      currentGrave = 5;
      ghostName = "Izumo no Okuni";
      gravesDone++;
      startGrave();
    } else if ((event.key == '6') && (currentGrave == null)) {

      currentGrave = 6;
      ghostName = "Empress Suiko";
      gravesDone++;
      startGrave();
    } else if ((event.key == '7') && (currentGrave == null)) {
   
      currentGrave = 7;
      ghostName = "Princess Kazunomiya";
      gravesDone++;
      startGrave();
    } else if ((event.key == '8') && (currentGrave == null)) {

      currentGrave = 8;
      ghostName = "Tomoe Gozen";
      gravesDone++;
      startGrave();
    }
    }
  });

// start the game
async function startGame() {

  //print out commands list or print out inventory list
  // X = doesn't fire
  // X: isWriting = true & bookOpen = true
  document.addEventListener('keyup', function(event) {
    if (!bookOpen & !isWriting) {
      if (event.key == 'c') {
        document.getElementById("content").innerHTML += document.getElementById("commands").innerHTML 
      } else if (event.key == 'i') {
        document.getElementById("content").innerHTML += document.getElementById("inventory").innerHTML
      }
    }
  });

  document.getElementById("content").innerHTML += '<hr>'; //add a divider after game start
  document.getElementById("content").innerHTML += document.getElementById("commands").innerHTML //print out the commands list for the first time
  
  try {
    await typeWriter("startText", "content", 50, true); //"you notice basket, time to begin tasks, heres the 7 graves"
    await skipText(0, "chooseGrave", "content", true);
  } catch (error) {
    console.error("Error: ", error);
  }
}

async function startGrave() {
    atGrave = true;
    let graveChosen = "\nYou move towards Grave [" + currentGrave + "]. As you walk into the mist, time seems to slow down. Now seems like a good time to check the book and offerings as you find your way towards the grave.\n";
    const graveStart = "\nOnce you find your way there, press [Enter] to begin your duties.\n";

    document.getElementById("content").innerHTML += '<hr>'; //add a divider after choosing a grave
    await typeWriter(graveChosen, "content", 50, false);
    await typeWriter(graveStart, "content", 50, false);
    document.addEventListener('keyup', graveEnter);
}

async function graveAction() {
  let start0;
  let line1;
  let line3 = "\nTime to move on for the night can only grow shorter.\n";
  const ghostAppear = "The Ghost of " + ghostName + " appears before you. ";
  if (gravesDone == 1) {
    start0 = start + " you begin to feel a chilling presence around you. The forest quiets down... unnaturally perhaps. And did the mist thicken just then?\n";
    line1 = "Frightened, you jump backwards and the items in your basket rattle. ";
  } else {
    start0 = start + " the forest begins to quiet down again, and the cold slowly chills your skin.";
    line1 = "You bow to " + ghostName + " as deeply as you can and utter a prayer to Bodhisattva Kannon to protect you. ";
  }
  const line2 = "\n " + ghostAppear + line1 + ghostName + " looks at you expectantly... and hungrily. You go through your basket of items. Which item will you offer?";
  
  await typeWriter(start0, "content", 50, false); //cleaning action plus environment text
  await typeWriter(line2, "content", 50, false); //ghost appear, jump backwards/bow, offer items text
  document.getElementById("content").innerHTML += document.getElementById("inventory").innerHTML //print inventory
  await countdown();
  console.log("Grave Finished");
  await typeWriter(line3, "content", 50, false); // move on text
  await skipText(0, "chooseGrave", "content", true); //print graves again
  document.removeEventListener('keyup', graveEnter);
  currentGrave = null;
}


function countdown() {
  return new Promise( (resolve) => {
  let timeLeft = 20; 
  let offering = null;
  document.addEventListener('keyup', function(event) {

      switch (event.key) {
        case 'm': 
          offering = 'm';
          break;
        case 'p': 
          offering = 'p';
          break;
        case 'f':
          offering = 'f';
          break;
        case 'k':
          offering = 'k';
          break;
        case 'b':
          offering = 'b';
          break;
        case 's':
          offering = 's';
          break;
        case 'h':
          offering = 'h';
          break;
      }
  });

    // fail if offering is wrong within time limit, offering wrong after time limit, time runs out
    // 30 seconds if i want to let the player look at the book during the countdown>???????????????????????????????
    // player can print commands and inventory during this: disable or not??????????????????????????????????????????
  const counting = setInterval(async () => {

    let timeText = timeLeft + "... ";
    skipText(0, timeText, "content", false);
    timeLeft--;

    if ((timeLeft == -1) || offering != null) { //stops countdown if time runs out or an offering is selected
      clearInterval(counting);
      if (offerings[currentGrave] == offering) { // success sequence if offering is right
        console.log("SUCCESS YAY");
        writeText('\n', "content");
        await successGrave();
        resolve();
      } else {
        // fail sequence if offering wasnt selected or offering was wrong
        console.log("FAIL");
        playerHealth--;
        writeText('\n', "content");
        await failGrave();
        resolve();
      }

    }
  }, 1700);

});
} //countdown

function successGrave() {
  return new Promise(async (resolve) => {
  let line2;
  switch (gravesDone) {
    case 1:
      line2 = " a shaky bow.\n";
      break;
    case 2:
      line2 = " another deep bow.\n";
      break;
  }
  let line1 = "\n" + ghostName + " takes the offering and disappears. The heavy mist seems to lessen a little and the hint of warmth surrounds you. You face the grave and give the headstone" + line2;
  await typeWriter(line1, "content", 50, false); //successText
  resolve();
});
} //successGrave

function failGrave() {
  return new Promise( async (resolve) => {
  let expressions = ["frigid", "cruel", "malevolent", "disgusted", "sinister", "furious", "wrathful", "vengeful"];
  let injuries4 = ["slashes your cheek.", "rips some skin off.", "rips out a chunk of hair.", "slits your face from ear to ear."];
  let injuries3 = ["strangles you before suddenly letting you go.", "steals some of your life force.", "severs one of your limbs.", "mutilates your face."];
  let injury;
  let line2;
  let backstory;

  if (gravesDone == 1) {
    line2 = " Suddenly, ";
    backstory = "\n\nYou now realize how the old caretaker must have died. He drank too much sake during last year's Obon and was torn to shreds by the angered spirits. If you want to avoid his fate, you must appeast at least 4 ghosts to leave with your life intact.\n";
  } else {
    line2 = " You brace yourself. ";
    backstory = "";
  }

  if (playerHealth <= 6 && playerHealth >= 4) { //from 4-6 health
    injury = injuries4[Math.floor(Math.random() * 4)];
  } else if (playerHealth <= 3 && playerHealth > 0) {
    injury = injuries3[Math.floor(Math.random() * 4)];
  } else if (playerHealth == 0) {
    injury = "wraps their ghostly hands around your neck and twists with a sharp motion. ";
  }
  
  let line1 = "\nThe air turns even colder and darker. " + " The spirit wears a " + expressions[Math.floor(Math.random() * 8)] + " expression." + line2 + ghostName + " reaches out a ghostly hand and " + injury;
  await typeWriter(line1 + backstory, "content", 50, false); //failText
  resolve();
});
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
// num: place at where typewriting stopped
// content: the id of the script or the actual text
// target: html element to be written to
// script: boolean whether text is from a script or a string var
// 
function skipText(num, content, target, script) {
  return new Promise( (resolve) => {
    if (script) {
      text = document.getElementById(content).textContent;
    } else {
      text = content;
    }
  
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
// speed: speed of writing
// script: if text content is from an html script element or from a string variable
// 
function typeWriter(text, targetElement, speed, script) {
    
  return new Promise((resolve) => {
    if (script) {
      textCon = document.getElementById(text).textContent;
    } else {
      textCon = text;
    }
    isWriting = true;
    
    let i = 0;
    let timer = setInterval(() => {
      if ((i < textCon.length) && (!isSkipping)) {
        const char = textCon.charAt(i);
        writeText(char, targetElement);
        i++;
      } else if (isSkipping) {
        clearInterval(timer);
        skipText(i, text, targetElement, script);
        isWriting = false;
        isSkipping = false;
        resolve();
      } else {
        clearInterval(timer);
        isWriting = false;
        resolve();
      }
    }, speed);
  });
}
