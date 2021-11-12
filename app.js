document.addEventListener('DOMContentLoaded', ()=>{

    //card options
    const cardArray = [{
        name: 'Batman',
        img: 'images/BM.jpg'
    }, {
        name: 'Batman',
        img: 'images/BM.jpg'
    }, {
        name: 'Goku',
        img: 'images/GK2.jpg'
    }, {
        name: 'Goku',
        img: 'images/GK2.jpg'
    }, {
        name: 'Rocket Racoon',
        img: 'images/RR.jpg'
    }, {
        name: 'Rocket Racoon',
        img: 'images/RR.jpg'
    }, {
        name: 'Spiderman',
        img: 'images/SM.jpg'
    }, {
        name: 'Spiderman',
        img: 'images/SM.jpg'
    }, {
        name: 'Scarlet Witch',
        img: 'images/SW.jpg'
    }, {
        name: 'Scarlet Witch',
        img: 'images/SW.jpg'
    },  {
        name: 'Winter Soldier',
        img: 'images/WS.jpg'
    }, {
        name: 'Winter Soldier',
        img: 'images/WS.jpg'
    }, {
        name: 'Captain America',
        img: 'images/CA.jpg'
    }, {
        name: 'Captain America',
        img: 'images/CA.jpg'
    }, {
        name: 'Deadpool',
        img: 'images/DP.jpg'
    }, {
        name: 'Deadpool',
        img: 'images/DP.jpg'
    }, {
        name: 'Falcon',
        img: 'images/FC.jpg'
    }, {
        name: 'Falcon',
        img: 'images/FC.jpg'
    }, {
        name: 'Flash',
        img: 'images/FL.jpg'
    }, {
        name: 'Flash',
        img: 'images/FL.jpg'
    }, {
        name: 'Green Lantern',
        img: 'images/GL.jpg'
    }, {
        name: 'Green Lantern',
        img: 'images/GL.jpg'
    }, {
        name: 'Iron Man',
        img: 'images/IM.jpg'
    }, {
        name: 'Iron Man',
        img: 'images/IM.jpg'
    }, {
        name: 'Nick Fury',
        img: 'images/NF.jpg'
    }, {
        name: 'Nick Fury',
        img: 'images/NF.jpg'
    }, {
        name: 'Star Lord',
        img: 'images/SL.jpg'
    }, {
        name: 'Star Lord',
        img: 'images/SL.jpg'
    }, {
        name: 'Hanging Spiderman',
        img: 'images/SM2.jpg'
    }, {
        name: 'Hanging Spiderman',
        img: 'images/SM2.jpg'
    }, {
        name: 'Saitama',
        img: 'images/STM.jpg'
    }, {
        name: 'Saitama',
        img: 'images/STM.jpg'
    }, {
        name: 'Thor',
        img: 'images/TH.jpg'
    }, {
        name: 'Thor',
        img: 'images/TH.jpg'
    }, {
        name: 'Vision',
        img: 'images/VN.jpg'
    }, {
        name: 'Vision',
        img: 'images/VN.jpg'
    }, {
        name: 'War Machine',
        img: 'images/WM.jpg'
    }, {
        name: 'War Machine',
        img: 'images/WM.jpg'
    }, {
        name: 'Wolverine',
        img: 'images/WV.jpg'
    }, {
        name: 'Wolverine',
        img: 'images/WV.jpg'
    }]

    cardArray.sort(()=>0.5-Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardIdChosen = []
    var cardsWon = []

    //Create board

    function createBoard(){
        for(let i=0; i<cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

//checkForMatches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneID = cardIdChosen[0]
    const optionTwoID = cardIdChosen[1]
    if (cardsChosen[0]===cardsChosen[1]){
        if(cardIdChosen[0]!=cardIdChosen[1]){
        alert("You got " + cardArray[optionOneID].name)
        cards[optionOneID].setAttribute('src', 'images/white.jpg')
        cards[optionTwoID].setAttribute('src', 'images/white.jpg')
        cards[optionOneID].removeEventListener("click", flipCard) 
        cards[optionTwoID].removeEventListener("click", flipCard)
        cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneID].setAttribute('src', 'images/blank.jpg')
        }
        
    }
    else{
        cards[optionOneID].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoID].setAttribute('src', 'images/blank.jpg')
        // alert("try again!")
        }
    cardsChosen=[]
    cardIdChosen=[]
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length===cardArray.length/2){
        resultDisplay.textContent = "You got all the cards!!"
    }
}

//flipCard
function flipCard(){
    var cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardIdChosen.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if (cardsChosen.length===2){
        console.log(cardsChosen)
        setTimeout(checkForMatch, 500)
    }
}
    createBoard()
})