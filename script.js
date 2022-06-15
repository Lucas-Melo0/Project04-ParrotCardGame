
let numberCards = 0;
let cardsInGame = [];
let cardHtml;
howMany();
function howMany(){
do { numberCards = prompt("Com quantas cartas deseja jogar?") 
}   while(numberCards < 4 || numberCards > 14 || numberCards % 2 !== 0);
}
insertCards()
function insertCards(){
    cardsInGame = [];
    cardHtml = document.querySelector(".card_set01");
    for (let i =0; i < numberCards; i++) {
        cardsInGame.push(cardHtml.innerHTML = "<div class='card_back'><img src='images/front 5.png'></div>");

    }
    cardHtml.innerHTML = cardsInGame;

    cardsInGame = [];
    cardHtml = document.querySelector(".card_set02");
    for (let i =0; i < numberCards; i++) {
        cardsInGame.push(cardHtml.innerHTML = "<div class='card_back'><img src='images/front 5.png'></div>");

    }
    cardHtml.innerHTML = cardsInGame;
    
}


    
       
