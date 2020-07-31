const deckArray = new Deck();
deckArray.createDeck();

const cardsDisplay = new CardsDisplay()


const payTable = new PayTable()
payTable.buildTable()

const cardsLogic = new CardsLogic();
//cardsLogic.getCardData()

cardsDisplay.pickCardForContainer(cardsLogic.round)

cardsDisplay.drawBtn.addEventListener('click', () => {
    cardsLogic.roundCount();
    cardsDisplay.pickCardForContainer(cardsLogic.round);
    cardsLogic.getCardsData();
    cardsLogic.arrangeCardsData();
    cardsLogic.findBasicHands();
    cardsLogic.winningHand();
    });

cardsDisplay.cardTable.addEventListener('click', (e) => {
    // if(logic.round != 0) {
    //     let target = e.target;
    //     if(target.classList.contains("card")){
    //         target.classList.toggle("card_selected")
    //     }
    // }

    //====for test purpose========
    let target = e.target;
    if(target.classList.contains("card")){
        target.classList.toggle("card_selected")
    }

})



