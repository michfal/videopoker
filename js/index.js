const deckArray = new Deck();
deckArray.createDeck();

const cardsDisplay = new CardsDisplay()


const payTable = new PayTable()
payTable.buildTable()

const logic = new Logic();
//logic.getCardData()

cardsDisplay.pickCardForContainer(logic.round)

cardsDisplay.drawBtn.addEventListener('click', () => {
    logic.roundCount();
    cardsDisplay.pickCardForContainer(logic.round);
    logic.getCardsData();
    logic.arrangeCardsData();
    logic.findBasicHands();
    logic.winningHand();
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



