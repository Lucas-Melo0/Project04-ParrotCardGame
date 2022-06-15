// Global variables 

let numberCards = 0;
let cardsInGame = [];
let cardHtml;

// Functions 

howMany();
function howMany(){
do { numberCards = prompt("Com quantas cartas deseja jogar?") 
}   while(numberCards < 4 || numberCards > 14 || numberCards % 2 !== 0);
}
insertCards()
function insertCards(){
    cardsInGame = [];
    cardHtml = document.querySelector(".card_set01");
    for (let i =0; i < numberCards/2; i++) {
        cardsInGame.push(cardHtml.innerHTML = "<div class='card_back'><img src='images/front 5.png'></div>"); 
        cardsInGame.push(cardHtml.innerHTML = "<div class='card_back'></div>");       
    }
    cardsInGame = cardsInGame.sort(compare)
    cardHtml.innerHTML = cardsInGame.join("");


    cardsInGame = [];
    cardHtml = document.querySelector(".card_set02");
    for (let i =0; i < numberCards/2; i++) {
        cardsInGame.push(cardHtml.innerHTML = "<div class='card_back'><img src='images/front 5.png'></div>")
        cardsInGame.push(cardHtml.innerHTML = "<div class='card_back'></div>");
        
        

    }
    cardsInGame = cardsInGame.sort(compare)
    cardHtml.innerHTML = cardsInGame.join("");
}

function compare(){
    return Math.random() - 0.5;
}

    
       
