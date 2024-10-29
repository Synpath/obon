
//const targetElement = document.getElementById('intro');

//const textContent = document.getElementById('intro').textContent;


function typeWriter(text, targetElement, speed) {
    textCon = document.getElementById(text).textContent;  
  let i = 0;
    let timer = setInterval(() => {
      if (i < textCon.length) {
        const char = textCon.charAt(i);
        if (char === '\n') {
          document.getElementById(targetElement).innerHTML += '<br>';
        } else {
          document.getElementById(targetElement).innerHTML += char;
        }
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }
  
  
  //typeWriter(textContent, "content", 50); 