class AccountLogic{
    constructor(){
        this.setBet = document.querySelector('.bet');
        this.currentBet = 1000;
        this.betIndex = 0;
        this.accountTotal = 110000
    }

    bet(e, basicBets){
        const target = e.target;
        if(target.classList.contains('bet_btn')){
            if(target.classList.contains('bet_decrease')) {
                if(this.betIndex > 0)this.betIndex--;
                this.currentBet = basicBets[this.betIndex] 
                console.log(this.currentBet)
            }
            if(target.classList.contains('bet_increase')) {
                if(this.betIndex < basicBets.length - 1)this.betIndex++;
                this.currentBet = basicBets[this.betIndex]
                console.log(this.currentBet)
            }
        }
    }

    displayBet(currentBet) {
        const stake = document.querySelector('.bet_stake');
        stake.innerHTML = currentBet;
    }

    cashTotalDisplay(cash) {
        const cashTotal = document.querySelector('.cash_value');    
        cashTotal.innerHTML = cash;
    }

    subtractBet(bet, round) {
        if(round === 0) this.accountTotal -= this.currentBet
        
    }

    calculateWin(hand, round, hands) {
        console.log(this.currentBet)
        if (round === 2) {
            if(hand){
                console.log(hands)
                console.log(hand);
                //console.log(hands.hand)
            } 
        }
       
    }

}

