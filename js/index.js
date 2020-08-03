const deckArray = new Deck();
deckArray.createDeck();

const cardsDisplay = new CardsDisplay()


const payTable = new PayTable()
payTable.buildTable()

const cardsLogic = new CardsLogic();
//cardsLogic.getCardData()

const accountLogic = new AccountLogic()

cardsDisplay.pickCardForContainer(cardsLogic.round)

cardsDisplay.drawBtn.addEventListener('click', () => {
    cardsLogic.roundCount();
    cardsDisplay.pickCardForContainer(cardsLogic.round);
    cardsLogic.getCardsData();
    cardsLogic.arrangeCardsData();
    cardsLogic.findBasicHands();
    cardsLogic.winningHand();
    });

cardsDisplay.cardTable.addEventListener('click', cardsDisplay.selectCard);

accountLogic.setBet.addEventListener('click', (e) => {
    accountLogic.bet(e, payTable.basicBet)
})

