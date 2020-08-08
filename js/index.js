const deckArray = new Deck();
deckArray.createDeck();

const cardsDisplay = new CardsDisplay()


const payTable = new PayTable()
payTable.buildTable()

//console.log(payTable.hands.royalFlush)

const cardsLogic = new CardsLogic();
//cardsLogic.getCardData()

const accountLogic = new AccountLogic()

cardsDisplay.pickCardForContainer(cardsLogic.round)
accountLogic.cashTotalDisplay(accountLogic.accountTotal)

cardsDisplay.drawBtn.addEventListener('click', () => {
    if(!accountLogic.bankrupt) {
        accountLogic.subtractBet(accountLogic.currentBet, cardsLogic.round);
        cardsLogic.roundCount();
        // console.log(cardsLogic.round)
        cardsDisplay.pickCardForContainer(cardsLogic.round);
        cardsLogic.getCardsData();
        cardsLogic.arrangeCardsData();
        cardsLogic.findBasicHands();
        accountLogic.calculateWin(cardsLogic.winningHand(), cardsLogic.round, payTable.hands);
        accountLogic.cashTotalDisplay(accountLogic.accountTotal);
    }
});

cardsDisplay.cardTable.addEventListener('click', cardsDisplay.selectCard);

accountLogic.displayBet(accountLogic.currentBet);

accountLogic.setBet.addEventListener('click', (e) => {
    accountLogic.bet(e, payTable.basicBet, cardsLogic.round);
    accountLogic.displayBet(accountLogic.currentBet);
})

accountLogic.restartBtn.addEventListener('click', () => {
    accountLogic.restart(payTable.basicBet);
    cardsLogic.roundReset()
    accountLogic.displayBet(accountLogic.currentBet);
    cardsDisplay.pickCardForContainer(cardsLogic.round);
})
