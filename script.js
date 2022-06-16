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
insertCards();
function insertCards(){
    images = ["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"]
    cardsInGame = [];
    cardHtml = document.querySelector(".card_set01");
    for (let i =0; i < numberCards/2; i++) {
       
        cardsInGame.push(cardHtml.innerHTML = `<div class='card_back' onclick='flipCard(this)'><img class ='back 'src='images/front 5.png'><img class ='front hidden'src='images/${images[i]}.gif'></div>`); 
            
    }
    cardsInGame = cardsInGame.sort(compare)
    cardHtml.innerHTML = cardsInGame.join("");

    cardsInGame = [];
    cardHtml = document.querySelector(".card_set02");
    for (let i =0; i < numberCards/2; i++) {
       
        cardsInGame.push(cardHtml.innerHTML = `<div class='card_back' onclick='flipCard(this)'><img class ='back 'src='images/front 5.png'><img class ='front hidden'src='images/${images[i]}.gif'></div>`); 
              
    }
    cardsInGame = cardsInGame.sort(compare)
    cardHtml.innerHTML = cardsInGame.join("");
}

function compare(){
    return Math.random() - 0.5;
}

function flipCard(element){
    let cardBack = element.querySelector(".back");
    let cardFront = element.querySelector(".front");
    cardBack.classList.add("hidden")
    cardFront.classList.remove("hidden")

}



    
       
