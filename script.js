// Global Variables

let numberCards = null;
let cardsInGame = [];
let cardHtml;
let startCard = null;   
let clicks = 0;
let matches = 0;
let seconds = 0;
let timer;
let cardDistribution;
let image = [ "bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot", "unicornparrot",];


// Functions
howMany();

function howMany() {
  do {numberCards = prompt("Com quantas cartas deseja jogar?")
  } while (numberCards < 4 || numberCards > 14 || numberCards % 2 !== 0);
    
  
  for (let i = 0; i < numberCards / 2; i++) {
    cardHtml = `<div class="card_back" onclick="toSelectCard(this)">
     <img class="front" src="images/front.png">
     <img class="back hidden" src="images/${image[i]}.gif">
     </div>`;
    cardsInGame.push(cardHtml);
    cardsInGame.push(cardHtml);
  }
}

cardsInGame.sort(comparador);

function comparador() {
  return Math.random() - 0.5;
}

cardDistribution = document.querySelector(".card_set");
cardDistribution.innerHTML = "";

for (let i = 0; i < numberCards; i++) {
  cardDistribution.innerHTML += cardsInGame[i];
}

function toSelectCard(cardHtml) {
  const front = cardHtml.querySelector(".front");
  const back = cardHtml.querySelector(".back");
  front.classList.add("hidden");
  back.classList.remove("hidden");
  toCompare(cardHtml);
}

function toCompare(cardHtml) {
  if (startCard === null) {
    startCard = cardHtml;
    startCard.setAttribute("onclick", "");
    clicks++;
    if (clicks === 1) {
      stopWatch();
    }
  } else if (startCard.innerHTML === cardHtml.innerHTML) {
    cardHtml.setAttribute("onclick", "");
    startCard.setAttribute("onclick", "");
    startCard = null;
    clicks++;
    matches = matches + 2;
    if (matches == numberCards) {
      clearInterval(timer);
      alert(`Você ganhou em ${clicks / 2} jogadas e ${seconds} segundos!`);
      restartGame()
    }
  } else {
    differentCards(cardHtml, startCard);
    startCard = null;
    clicks++;
  }
}

function differentCards(cardHtml, startCard) {
  setTimeout(() => unflipCard(cardHtml, startCard), 1000);

  function unflipCard(cardHtml, startCard) {
    const frontCard = cardHtml.querySelector(".front");
    const backCard = cardHtml.querySelector(".back");
    frontCard.classList.remove("hidden");
    backCard.classList.add("hidden");
    cardHtml.setAttribute("onclick", "toSelectCard(this)");
    const frontstartCard = startCard.querySelector(".front");
    const backstartCard = startCard.querySelector(".back");
    frontstartCard.classList.remove("hidden");
    backstartCard.classList.add("hidden");
    startCard.setAttribute("onclick", "toSelectCard(this)");
  }
}


function stopWatch() {
  timer = setInterval(function () {
    seconds++;
    document.querySelector(".timer").innerHTML = `Seu tempo: ${seconds}`;
    if (matches == numberCards) {
      clearInterval(timer);
    }
  }, 1000);
}

function restartGame() {
  let answer;
  do {
    answer = prompt("Você quer começar o jogo novamente?")
     }
     while (answer.toLowerCase() !== "sim" && answer.toLowerCase() !== "não")

  if (answer.toLowerCase() === "sim"){
    document.location.reload()
  }
  else if (answer.toLowerCase() === "não") {
    alert("Obrigado por jogar!")
  }
}



    
       
