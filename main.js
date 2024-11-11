
let gameStart = false;
let gameEnd = false;
let isWriting = false;
let isSkipping = false;
let atGrave = false;
let currentGrave = null;
let bookOpen = false;
let isScript = false; //plain text vs from a script
let offering = null;
let gravesDone = 1;
let offerings = ['0', 'm', 'p', 'f', '4','k', 'b', 's', 'h']; 
let playerHealth;
let finGrave = [null, false, false, false, null, false, false, false, false,] // keeps track of which graves are done
let choosing = false;

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
let ghostName = "";

//print out finished graves or end game when escape is pressed or restart the game when r is pressed
document.addEventListener('keyup', function(event) {
  if (gameStart) {

    if (!isWriting && !bookOpen) {
    let graves = "\nFinished Graves:";

    for (i = 0; i < 9; i++) {
      if (finGrave[i] == true) {
        graves += " [" + i + "]";
      }
    }

    if ((event.key == 'g') || (event.key == 'G')) {
      skipText(0, graves, "content", false);
    }
  }
  }

  if ((event.key == 'r') || (event.key == 'R')) {
    this.location.reload();
  }
});

//start the game, begin grave tasks, skip text writing
// Doesn't fire if the game has already started and the game is writing text
// 2: fires if currentGrave != null and atGrave = true
document.addEventListener('keyup', function(event) {
  
  if ((event.key == 'Enter') && !isWriting) {
    if (!gameStart && !gameEnd) {
      gameStart = true;
      startGame();
    }
  } else if ((event.key == " ") && (isWriting)) {
    isSkipping = true;
  }
});

//open book atGrave = true?
//X: gameStart = false, isWriting = true; bookOpen = true; atGrave = true
document.addEventListener('keyup', function(event) {
  if ((!bookOpen && gameStart) && (!isWriting && !atGrave)) {
  if (event.key == "e" || event.key == "E") {
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
    <h3>1: Taira no Masakado </br></h3>
    <h3><br>2: Princess Kazunomiya </br></h3>
    <h3><br>3: Emperor Sutoku </br></h3>
    <h3><br>5: Izumi no Okuni </br></h3>
    <h3><br>6: Empress Suiko </br></h3>
    <h3><br>7: Sugawara no Michizane </br></h3>
    <h3><br>8: Tomoe Gozen </br></h3>
    </p>
    </script>  

    <script id="page1" type="type/html">
      <h1>1: Taira no Masakado</h1>
      <h5> Heian samurai hungry for vengeance and power, one of the 日本三だいおんりょ (Three Great Onryo of Japan) </h5>
      <p>
      Onryo are spirits who died with resentment and anger and have returned to haunt the living to exact revenge. After each death of the Three Onryo, there were series of natural disasters and deaths that led rulers to deify them as kami in hopes of appeasing their resentment and anger.<br>
      <br>Taira no Masakado was a powerful samurai warlord who staged several uprisings during his lifetime. His most famous uprising is the Tengyo no Ran rebellion.<br>
      <br>Taira no Masakado was born into a Taira clan subset who were descened from Emperor Kanmu. As a result, he could claim royal lineage. After his father died, fighting within the family began. Reasons for this conflict are unclear. A battle broke out in 935 between his uncles, his cousins, and Maskado, but he soundly defeated them and took revenge on their lands. This brought him into conflict with his other relatives who went to the emperor to settle this dispute. <br>
      <br>He was pardoned for the killings of his relatives due to a general amnesty issued in commemoration of Emperor Suzaku's coming of age ceremony. After returning to his lands, his father-in-law, Yoshikane, attacked. Masakado won once again, and he later obtained a warrant to arrest Yoshikane and some of his other relatives. In 938, after another dispute with his cousin, Masakado was summoned again for questioning on his dispute with his cousin, Sadamori. Masakado ignored this order, citing that the warrant allowed him to arrest Sadamori instead. <br>
      <br>In pursuit of Sadamori, Masakado invaded the Hitachi province and gained control of the local government. He then went on to raid other provinces: Shimotsuke, Kozuke, Musashi, Kazusa, Awa, Sagami, Izu, and Shimosa, claiming that this was a legal campaign because of his warrant and because he had been slandered and defamed unjustly by his enemies. <br>
      <br>This did not sit well with the imperial government as he was seen as no longer just a local warrior warring with other clans but rather an outlaw and traitor rebelling against the imperial court. After gaining control of the Kanto region in central Japan, he claimed himself as the New Emperor and began organizing his own court. <br>
      <br>The imperial court issued warrants for Masakado's head and hired several warriors, some of which were Masakado's relatives, for this task. During the Tengyo no Ran rebellion in 940, his cousin, Taira no Sadamori, and former ally, Fujiwara Hidesato, beheaded him. After his head was brought back to the capital, it was put on display and denied funeral rites.<br>
      <br>According to legend, his head flew off into the sky towards Shimosa, landing in a small fishing village named Shibasaki. The village who found the head cleaned and buried it. He was worshipped by the peasants as a symbol of justice who stood against the corrupt nobility. <br>
      <br>As with the other Great Onryo, disasters began to occur sometime after his death. A plague that struck Edo in the early 1300s was attributed to Masakado, and after his shrine was moved to the Ministry of Finance in 1928 as a temporary location, the Minister of Finance died, and other employees died, were injured in accidents, and became sick. The Ministry of Finance building was demolished, and he was enshrined at the Kanda Shrine in Tokyo. While his memorial currently occupies prime real estate in downtown Tokyo, people do not dare to tear it down.<br>
      </p>
    </script>

    <script id="page2" type="type/html">
    <h1>2: Princess Kazunomiya</h1>
    <h5>Imperial Princess and waka poet</h5>
    <p>
    Princess Kazunomiya was one of the key players in smoothing out the relationship between the shogunate and imperial court. As the imperial princess, she was married to shogun, Tokugawa Imeochi, in a political alliance designed to reconcile the shogunate and the imperial court. After her husband died, she was instrumental in the negotiation for the peaceful surrender of the Edo castle, avoiding civil war during the Meiji Restoration.<br>
    <br>Princess Kazunomiya was the youngest daughter of Emperor Ninko and half-sister to Emperor Komei. Emperor Komei's son would eventually become Emperor Meiji and bring about the Meiji Restoration to Japan. Originially, she was engaged to Prince Arisugawa Taruhito, but that engagement was broken when the court needed someone for a political marriage with the shogunate.<br> 
    <br>The shogunate and the Imperial court were locked in a power struggle as the shoguns, a military ruler, began to accumulate more power than the emperors. After Matthew C. Perry landed in Japan and demanded that Japan open up its borders, the shogunate accepted a treaty with the Americans despite their unwillingness. This caused conflict with the Emperor as Emperor Komei did not want to stop Japan's isolationist policy. In an attempt to politically unify the imperial family and the shogunate against the foreign threat, a political marriage between Kazunomiya and Tokugawa Iemochi was proposed.<br>
    <br>While both the Emperor and his sister refused at first, Kazunomiya eventually agreed to the marriage with several conditions. She traveled from Kyoto to Edo for her marriage procession. While this marriage was meant to reassure the commoners, it did not do much to soothe the commoner's concerns at all. Her marriage procession was a grand one and put a great strain on the towns along the path. Each town had to supply horses, food, and labor, which led to economic burden. The commoners protested, and as a result, the Tokugawa officials promised to compensate for economic damage.<br>
    <br>The political impact of this marriage was not as effective as the imperial court had hoped. The imperial court and the shogunate continued to butt heads, and furthermore, Tokugawa Iemochi died young. After her husband's death, Kazunomiya became a Buddhist nun. During the Meiji Restoration, she along with her mother-in-law, supported Tokugawa Yoshinobu for shogunate however public opinion turned against Yoshinobu.<br>
    <br>While her poetry is not well-known today, she was known to be an excellant calligrapher and waka poet. During her journey to Edo, it is said that she stopped momentarily at Biwa Pass, looked back at her home city, and recited an old poem that is now inscribed on a large stone that sits on top of the pass.<br>
    </p>
    </script>

    <script id="page3" type="type/html">
    <h1>3: Emperor Sutoku</h1>
    <h5> 75th Emperor of Japan, one of the 日本三だいおんりょ (Three Great Onryo of Japan) </h5>
    <p>
      Emperor Sutoku's life was one of political conflict and betrayal, much like all three of the Three Great Onryo. Before his ascension to the throne, he was known as Prince Akihito, the first son of Emperor Toba. However, rumors would spread that he was actually the son of former Emperor Shirakawa instead. <br>
      <br>Emperor Toba abdicated the throne in 1123, and Sutoku ascended to the throne at the young age of four or five. Despite Toba's abdication, he still wielded significant political power, and he schemed to ensure that he could hold onto it. Emperor Sutoku abdicated as well in 1141, and Toba chose Sutoku's younger brother for the throne, who came to be known as Konoe, rather than Sutoku's son. <br>
      <br>Emperor Konoe then died in 1155, and Emperor Sutoku's son was snubbed once more when Toba chose another son of his, Go-shirakawa, to become emperor instead. Emperor Toba soon died in 1156, and after that, Sutoku launched a rebellion against Emperor Go-shirakawa in the hopes of installing his own son as emperor. This rebellion is known as the Hogen Rebellion. This rebellion had lasting consequences on Japan's politics. It only lasted a few short years, but it led to the rise of the samurai class and subsequent samurai-led governments. <br>
      <br>Sutoku's forces were soundly defeated, and he was exiled. Afterwards, he became a monk and devoted himself Buddhism. In hopes of gaining favor with the imperial court again, he copied out Buddhist sutras and sent them to the capital as offerings. Fearing that accepting these sutras would curse them, the court refused to accept any of his manuscripts. This only fueled Sutoku's rage against the imperial court. <br>
      <br> In 1164, Sutoku died, and Emperor Go-Shirakawa refused to pay respects, hold funeral services, or build a royal tomb. After his death, many disasters struck the capital. Imperial power weakened, and war was beginning to break out. These events were all attributed to Sutoku's vengeful spirit. In hopes of appeasing his spirit, Go-Shirakawa held funeral services for Sutoku. In 1868, he was formally enshrined as a kami. <br>
      </p>
    </script>

    <script id="page5" type="type/html">
    <h1>5: Izumo no Okuni</h1>
    <h5> Founder of Kabuki </h5>
    <p>
    Kabuki is a world-renowned performance art from Japan incorporating music, dance, and mime that focuses on visual spectacle rather than story. While most Kabuki actors today are male, the art is credited to a priestess named Okuni.<br>
    <br>Very little is known about Okuni. Some sources believe that she was the daughter of a blacksmith who later became an attendant at the shrine of Izumo. When the shrine needed money for its periodic renovation, she alongisde other dancers traveled to Kyoto to earn money. There, she would put on performances on the street. This new style of dancing that Okuni developed was flamboyant, eccentric, and suggestive. In 1603, she formed a troupe of female dancers who gave highly popular performances by the Kamo River. <br>
    <br>According to some sources, this new art form, dubbed kabuki, became so popular that Okuni and her troupe were summoned to perform at the Edo Castle in 1607. Other all-female troupes popped up around Japan as kabuki gained notoriety. Performances were often loud, bizzare, and incorporated elements like drag, satire, and comedy. As a result, kabuki began to be associated with pleasure districts and prostitution. <br>
    <br>The Tokugawa shogunate banned women from performing kabuki in 1629, citing that female kabuki actresses promoted moral corruption. Boys and young men would then take their place, dressing up as both men and women, until their involvement was also banned by the shogunate. Older male dancers then took over these roles. The ban on female Kabuki actresses lasted until the Meiji Restoration in 1868, but it was too late. The norm of male-only performances was set in stone.<br>
    <br>Not much is known about Okuni's life after her performance at the Edo Castle. It is thought that she returned to the shrine of Izumo and became a Buddhist nun until her death. In honor of Okuni's contributions to Japanese theater, a commemorative statue was erected by the Kamo River near the Minami-za kabuki theatre.<br>
    </p>
    </script>

    <script id="page6" type="type/html">
    <h1>6: Empress Suiko</h1>
    <h5> First recorded Empress of Japan </h5>
    <p>
    Empress Suiko was the 33rd ruler of Japan and is known as the first reigning empress of Japan in recorded history. During her reign, she would reform Japan's bureaucracy based on the Chinese bureaucracy and encourage the influence of Chinese culture in Japan through the expansion of Buddhism. <br>
    <br>Born in 554, she was the daughter of Emperor Kimmei. At 18, she became the empress-consort of her half-brother, Emperor Bidatsu. Emperor Bidatsu reigned from 572 to 585, and after his death and the short rule of Emperor Yomei, interclan warfare over succession broke out. Suiko's brother reigned next but was murdered in 592. Suiko's uncle, urged Suiko to fill the power vacuum by taking the throne along side one of his nephews, Shotoku, as regent or prime minister.<br>
    <br>While much of the political power was wielded by Prince Shotoku, Empress Suiko was not entirely powerless and exerted much influence over her reign. Her reign lasted 35 years. The expansion of Buddhism in Japan became one of her biggest accomplishments. Suiko formally recognized Buddhism in Japan through her issuance of the Flourishing Three Treasures Edict. As a result, many noble families to build temples dedicated to Buddhism. Many Buddhist monks also come to Japan in order to escape political unrest in Korea. Along with Buddhist teachings and scriptures, these monks also brought over culture, arts, and the latest science and technology. While Empress Suiko endorsed Buddhism, she also made an effort to smooth out conflicts between Japanese Shintoism and the new established Buddhism. When Japan was struck by a major earthquake, Suiko ordered the construction of shrines dedicated to the Shinto god of earthquakes.<br>
    <br>Suiko also improved Japan's diplomatic relationship with China. During her reign, the Sui dynasty diplomatically recognized Japan, and Chinese influence on Japan vastly increased. The Chinese sexagenery calendar was brought over to Japan, and Suiko took inspiration from the Chinese bureaucracy to reform Japan's own bureaucracy. Under her rule,  the Japanese bureaucracy adopted the Rank System of court etiquette and the Twelve Level Cap system which distinguished the ranks of bureaucratic officials by the form and material of their official caps. Alongside Prince Shotoku, she implemented the adoption of the 17-Article Constitution in 604 that focused on the morals and virtues that were expected of government officials. <br>
    <br>Before her death, Empress Suiko named two potential successors while on her deathbed however did not indicate a preference for who should succeed the throne. As her subjects were suffering from a famine, she requested that resources for her mausoleum be instead used to relieve the famine.<br>
    </p>
    </script>

    <script id="page7" type="type/html">
    <h1>7: Sugawara no Michizane</h1>
    <h5> Famed court scholar, one of the 日本三だいおんりょ (Three Great Onryo of Japan)</h5>
    <p>
    Sugawara no Michizane is considered one of the greatest scholars and poets in Japanese history. After the Fujiwara clan spearheaded Michizane's banishment from the imperial court, he died in poverty and returned as a onyro to enact revenge.<br>
    <br>Sugawara no Michizane was born to a high-ranking family of scholars. He began studying Chinese classics and literature and even wrote his first poem in Chinese at a very young age. In 862, he entered university and passed the civil-service exam in 870. He passed the highest level of government exams at age 26 and attained the highest level of scholarship in Kyoto at age 33. After holding several imperial positions, he was appointed in 899 as the Minister of the Right, the second highest court rank. <br>
    <br>Michizane's conflict with the Fujiwara clan started in 888 when Emperor Uda was feuding with Fujiwara no Mototsune. Michizane sided with Emperor Uda and was rewarded for his support. While this proved beneficial during Emperor Uda's reign, this caused the Fujiwara clan to target Michizane after Emperor Uda abdicated the throne to his son, Emperor Daigo. Emperor Daigo did not share his father's views and favored the Fujiwara clan. Seizing this opportunity, Fujiwara Tokihira, the son of Fujiwara Mototsune, convinced Emperor Daigo that Michizane was plotting treason.<br>
    <br>Michizane was then banished to the island of Kyushu where he held a very minor post. This post did not come with the privileges that he had during his time in the imperial government, and the work was hard and thankless. He remained there until his death in 903, all the while longing for Kyoto and the life he once had. One of his most famous waka, written in 901, was composed just before he was banished from Kyoto. The poem lamented that he would never again see his precious plum tree in his residence in Kyoto, and according to a legend, his beloved plum tree uprooted itself from Kyoto and flew to Kyushu. This plum tree is said to be the very one at the Dazaifu Tenmangu, a shrine built over the grave of Sugawara no Michizane.<br>
    <br>After his death, he was said to haunt the imperial capital and cursed the capital with disasters. The emperor eventually built a shrine, struck any mention of his exile from imperial records, and even posthumously restored his rank and office. However, this did not appease his ghost. Michizane was officially deified as a kami of lightning or storms and scholarship in 987, known as Tenman Tenjin. <br>
    <br>As a kami, he is a patron saint of learning, and students often buy amulets at his dedicated temples and shrines before exams. Festivals for him are commonly held when the plum trees start to bloom, and shrines dedicated to Michizane often plant plum trees on their grounds as that was his favorite tree.<br>
    </p>
    </script>

    <script id="page8" type="type/html">
    <h1>8: Tomoe Gozen</h1>
    <h5> Fearsome and infamous female samurai</h5>
    <p>
    Tomoe Gozen is one of the most famous onna musha, female samurai. While there is speculation that she may have been a mythical figure rather than an actual one, she has earned her place in samurai history with her fierceness and martial skill. <br>
    <br>Virtually all records of her existence come from The Tale of Heike, an epic of the Genpei War. According to these epics, Tomoe was a formidable archer and excellent swordswoman. Rather than focus on defense like the onna bugeisha, she was an offensive warrior. She mostly likely would have lived around 1157 to 1247. Tomoe is portrayed as serving the samurai Minamoto Yoshinaka, either as just a samurai, as his wife, or as a mistress. Her fame comes from her role during the Genpei War from 1180 to 1185. <br>
    <br>The Genpei War was a civil war between the Minamoto and Taira clans, eventually leading to the fall of the Taira clan and the establishment of the Kamakura shogunate. Her most famous battle was the Battle of Awazu in 1184 where Yoshinaka was defeated by his cousin, Minamoto Yoshitsune. During the battle, Yoshinaka's army of 300 soldiers was reduced to just five warriors. <br>
    <br>There are various stories regarding her feats in this battle. According to one, she encountered two renowned enemy generals as Yoshinaka's band of warriors was retreating. She defeated the first, Hatakeyama, who decided to run away rather than have his family's reputation be tainted with the shame of his death by a woman. The second general, Uchida, she beheaded. Another version describes Yoshinaka and his remaining samurai preparing to charge Yoshitsune's army again. Yoshinaka ordered Tomoe to leave the battlefield as it would be shameful for him to die alongside a woman. She reluctantly obeyed his command, but before she retreated, she is said to have beheaded another warrior, either Honda no Morishige or Onda no Hachiro. <br>
    <br>After this battle, not much is known about the rest of her life. Some accounts claim that she became a Buddhist nun and died at 91. Another account claims that she was captured by Wada Yoshimori, one of Minamoto Yoritomo's samurai, turned into a concubine, and gave birth to his son, Asahina Saburo Yoshihide. Yet another account claims that Tomoe avenged Yoshinaka's death by killing his attackers, stealing back his head, and then walking into the sea to drown. <br>
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
  bookOpen = true; // is the book open right now? 

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
    if ((event.key == 'Enter') && (!choosing)) {
      choosing = true;
      graveAction();
    }
}

// choose a grave
document.addEventListener('keyup', async function(event) {
  if ((!isWriting && gameStart) && !bookOpen) { //not writing and game has started
          let doneText = "\nThis grave has already been cleaned. Try another one.\n";
          if ((event.key == '1') && (currentGrave == null)) { 
            currentGrave = 1;
           switch (finGrave[currentGrave]) {
              case true:
                await typeWriter(doneText, "content", 50, false); 
                await skipText(0, "chooseGrave", "content", true);
                currentGrave = null;
                break;
              default:
                ghostName = "Emperor Sutoku";
                startGrave(); 
                finGrave[currentGrave] = true;
                break;
           }      
          } else if ((event.key == '2') && (currentGrave == null)) {   
            currentGrave = 2;
            switch (finGrave[currentGrave]) {
              case true:
                await typeWriter(doneText, "content", 50, false); 
                await skipText(0, "chooseGrave", "content", true);
                currentGrave = null;
                break;
              default:
                ghostName = "Sugawara no Michizane";
                startGrave();
                finGrave[currentGrave] = true;
                break;
           }     
            
          } else if ((event.key == '3') && (currentGrave == null)) {
            currentGrave = 3;
            switch (finGrave[currentGrave]) {
              case true:
                await typeWriter(doneText, "content", 50, false); 
                await skipText(0, "chooseGrave", "content", true);
                currentGrave = null;
                break;
              default:
                ghostName = "Taira no Masakado";
                startGrave();
                finGrave[currentGrave] = true;
                break;
           }  
          } else if ((event.key == '5') && (currentGrave == null)) {
            currentGrave = 5;
            switch (finGrave[currentGrave]) {
              case true:
                await typeWriter(doneText, "content", 50, false); 
                await skipText(0, "chooseGrave", "content", true);
                currentGrave = null;
                break;
              default:
                ghostName = "Izumo no Okuni";
                startGrave();
                finGrave[currentGrave] = true;
                break;
           } 
            
          } else if ((event.key == '6') && (currentGrave == null)) {

            currentGrave = 6;
            switch (finGrave[currentGrave]) {
              case true:
                await typeWriter(doneText, "content", 50, false); 
                await skipText(0, "chooseGrave", "content", true);
                currentGrave = null;
                break;
              default:
                ghostName = "Empress Suiko";
                startGrave();
                finGrave[currentGrave] = true;
                break;
           } 

          } else if ((event.key == '7') && (currentGrave == null)) {
        
            currentGrave = 7;
            switch (finGrave[currentGrave]) {
              case true:
                await typeWriter(doneText, "content", 50, false); 
                await skipText(0, "chooseGrave", "content", true);
                currentGrave = null;
                break;
              default:
                ghostName = "Princess Kazunomiya";
                startGrave();
                finGrave[currentGrave] = true;
                break;
           } 
            
          } else if ((event.key == '8') && (currentGrave == null)) {

            currentGrave = 8;
            switch (finGrave[currentGrave]) {
              case true:
                await typeWriter(doneText, "content", 50, false); 
                await skipText(0, "chooseGrave", "content", true);
                currentGrave = null;
                break;
              default:
                ghostName = "Tomoe Gozen";
                startGrave();
                finGrave[currentGrave] = true;
                break;
           } 
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
        switch (event.key) {
          case 'c':
            document.getElementById("content").innerHTML += document.getElementById("commands").innerHTML;
            window.scrollTo(0, document.body.scrollHeight);
            break;
          case 'C':
            document.getElementById("content").innerHTML += document.getElementById("commands").innerHTML;
            window.scrollTo(0, document.body.scrollHeight);
            break;
          case 'i':
            document.getElementById("content").innerHTML += document.getElementById("inventory").innerHTML;
            window.scrollTo(0, document.body.scrollHeight);
            break;
          case 'I':
            document.getElementById("content").innerHTML += document.getElementById("inventory").innerHTML;
            window.scrollTo(0, document.body.scrollHeight);
            break;
        }
    }
  });

  playerHealth = 7;
  document.getElementById("content").innerHTML += '<hr>'; //add a divider after game start
  document.getElementById("content").innerHTML += document.getElementById("commands").innerHTML //print out the commands list for the first time
  window.scrollTo(0, document.body.scrollHeight);

  try {
    await typeWriter("startText", "content", 50, true); //"you notice basket, time to begin tasks, heres the 7 graves"
    await skipText(0, "chooseGrave", "content", true);
  } catch (error) {
    console.error("Error: ", error);
  }
}

// start the grave
async function startGrave() {
    atGrave = true;
    let graveChosen = "\nYou move towards Grave [" + currentGrave + "]. As you walk into the mist, time seems to slow down. Now seems like a good time to check the book with [e] and offerings with [i] as you find your way towards the grave.\n";
    const graveStart = "\nOnce you find your way there, press [Enter] to begin your duties.\n";

    document.getElementById("content").innerHTML += '<hr>'; //add a divider after choosing a grave
    await typeWriter(graveChosen, "content", 50, false);
    await typeWriter(graveStart, "content", 50, false);
    document.addEventListener('keyup', graveEnter);
}

//text + offerings
async function graveAction() {
  let start0;
  let line1;
  let line3 = "\nTime to move on for the night can only grow shorter.\n";
  const ghostAppear = "The Ghost of " + ghostName + " appears before you. ";
  const start = "\nYou set down your things and begin." + actions[Math.floor(Math.random() * 8)]
  if (gravesDone == 1) {
    start0 = start + " you begin to feel a chilling presence around you. The forest quiets down... unnaturally perhaps. And did the mist thicken just then?\n";
    line1 = "Frightened, you jump backwards and the items in your basket rattle. ";
  } else {
    start0 = start + " the forest begins to quiet down again, and the cold slowly chills your skin.\n";
    line1 = "You bow to " + ghostName + " as deeply as you can and utter a prayer to Bodhisattva Kannon to protect you. ";
  }
  const line2 = "\n " + ghostAppear + line1 + ghostName + " looks at you expectantly... and hungrily. You go through your basket of items. Which item will you offer?";
  
  await typeWriter(start0, "content", 50, false); //cleaning action plus environment text
  await typeWriter(line2, "content", 50, false); //ghost appear, jump backwards/bow, offer items text
  document.getElementById("content").innerHTML += document.getElementById("inventory").innerHTML //print inventory
  window.scrollTo(0, document.body.scrollHeight);
  await countdown();
  console.log("Grave Finished");
  console.log("Graves finished = " + gravesDone);

  if (gravesDone == 7) { //end the game once all the graves are finished
    choosing = false;
    await endGame();
    document.removeEventListener('keyup', graveEnter);
  } else { 
    await typeWriter(line3, "content", 50, false); // move on text
    await skipText(0, "chooseGrave", "content", true); //print graves again
    document.removeEventListener('keyup', graveEnter);
    currentGrave = null;
    atGrave = false;
    choosing = false;
    gravesDone++;
  }
}

// switch statement for offering keyboard event
function offerSwitch(event) {
  switch (event.key) {
    case 'm': 
      offering = 'm';
      break;
    case 'M':
      offering = 'm';
      break;
    case 'p': 
      offering = 'p';
      break;
    case 'P': 
      offering = 'p';
      break;
    case 'f':
      offering = 'f';
      break;
    case 'F':
      offering = 'f';
      break;
    case 'k':
      offering = 'k';
      break;
    case 'K':
        offering = 'k';
        break;
    case 'b':
      offering = 'b';
      break;
    case 'B':
        offering = 'b';
        break;
    case 's':
      offering = 's';
      break;
    case 'S':
        offering = 's';
        break;
    case 'h':
      offering = 'h';
      break;
    case 'H':
      offering = 'h';
      break;
  }
}

// countdown for offerings 
function countdown() {
  return new Promise( async (resolve) => {
  let timeLeft = 20; 
  
  document.addEventListener('keyup', offerSwitch);

    // fail if offering is wrong within time limit, offering wrong after time limit, time runs out
  const counting = setInterval(async () => {

    let timeText = timeLeft + "... ";
    skipText(0, timeText, "content", false);
    timeLeft--;
    if ((timeLeft == -1) || offering != null) { //stops countdown if time runs out or an offering is selected
      clearInterval(counting);
      if (offerings[currentGrave] == offering) { // success sequence if offering is right
        console.log("SUCCESS YAY");
        writeText('\n', "content");
        document.removeEventListener('keyup', offerSwitch);
        await successGrave();
        offering = null;
        resolve();
      } else {
        // fail sequence if offering wasnt selected or offering was wrong
        console.log("FAIL");
        playerHealth--;
        writeText('\n', "content");
        document.removeEventListener('keyup', offerSwitch);
        await failGrave();
        offering = null;
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
    default:
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

  switch (gravesDone) {
    case 1:
      line2 = " Suddenly, ";
      backstory = "\n\nYou now realize how the old caretaker must have died. He drank too much sake during last year's Obon and was torn to shreds by the angered spirits. If you want to avoid his fate, you must appeast at least 4 ghosts to leave with your life intact. You now realize you should take a look at the book, [e], to learn about each ghost's favored offering.\n";
      break;
    default:
      line2 = " You brace yourself. ";
      backstory = "";
      break;
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

function endGame() {
  return new Promise ( async (resolve) => {
    gameStart = false;
    gameEnd = true;
    console.log("Game Ended");
    let text;
    
    await typeWriter("\n\nFinally, every last grave is clean. ", "content", 50, false);

    //endings
    if (playerHealth == 7) {
        await typeWriter("Thankfully, you have survived the night unscathed. ", "content", 50, false);
        text = "You make";
        let text1 = text + " your way out through the shrine's torii gate. You are finally back in the land of the living. As you turn to face all the graves one last time, you bow deeply, give your thanks to Bodhisattva Kannon, and return home.\n";
        await typeWriter(text1 + "\nMay your next Obon be as fruitful as this one.", "content", 50, false);
        
    } else if (playerHealth >= 4 && playerHealth <= 6) {
        await typeWriter("Unfortunately, you suffered harm... But you lived to tell the tale! ", "content", 50, false);
        text = "You stagger";
        let text1 = text + " your way out through the shrine's torii gate. You are finally back in the land of the living. As you turn to face all the graves one last time, you bow deeply, give your thanks to Bodhisattva Kannon, and return home.\n";
        await typeWriter(text1 + "\nMay your next Obon be as fruitful as this one.", "content", 50, false);
    } else if (playerHealth >= 0 && playerHealth <= 3) {
      let text1 = "You could not escape the old caretaker's fate. Unfortunately, you were torn to shreds. When you open your eyes again, you are floating above your own headstone. It is Obon once more, and your family members are carefully preparing your offerings."
      let text2 = " You survey all the red spider lilies blooming around your headstone.\n\nWill you condemn them to the same fate as yours?";
      await typeWriter(text1 + text2, "content", 50, false);
    }

    resolve();
});
} //endGame


// write a character to an html element
function writeText(char, target) {
  return new Promise( (resolve) => {
    if (char === '\n') {
      document.getElementById(target).innerHTML += '<br>'; // Add a line break
    } else {
      document.getElementById(target).innerHTML += char;
    }
    window.scrollTo(0, document.body.scrollHeight);
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
    const container = document.getElementById('scroll');
    let i = 0;
    let timer = setInterval(() => {
      if ((i < textCon.length) && (!isSkipping)) {
        const char = textCon.charAt(i);
        writeText(char, targetElement);
        window.scrollTo(0, document.body.scrollHeight);
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
        window.scrollTo(0, document.body.scrollHeight);
        resolve();
      }
    }, speed);
  });
}
