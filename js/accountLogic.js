class AccountLogic{
    constructor(){
        this.setBet = document.querySelector('.bet');
        this.currentBet = 1000;
        this.betIndex = 0;
        this.accountTotalBase = 11000;
        this.accountTotal = this.accountTotalBase;
        this.restartBtn = document.querySelector('.restart');
        this.display = document.querySelector('.game_status');
        this.bankrupt = false;
    }

    bet(e, basicBets, round) {
        const target = e.target;
        if(round === 0) {
            if(target.classList.contains('bet_btn')){
                if(target.classList.contains('bet_decrease')) {
                    if(this.betIndex > 0)this.betIndex--;
                    this.currentBet = basicBets[this.betIndex] 
                    console.log(this.currentBet)
                }
                if(target.classList.contains('bet_increase')) {
                    if(this.betIndex < basicBets.length - 1)this.betIndex++;
                    this.currentBet = basicBets[this.betIndex];
                    // console.log(this.currentBet);
                }
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
        if(round === 0) this.accountTotal -= this.currentBet;
        if(this.accountTotal < 0) this.accountTotal = 0;
    }

    calculateWin(hand, round, hands) {
    
        // if(hand){
        //     console.log(hand)
        //     const currentHand = hands[hand]
        //     win = currentHand.value(this.currentBet)
        //     this.accountTotal += win;
        //     }
        let win;
        if (round === 2) {
            
            if(hand){
                const currentHand = hands[hand]
                win = currentHand.value(this.currentBet)
                this.accountTotal += win;
            } 
        }
        this.gameplayMessages(round, hand, win)
    }

    gameplayMessages(round, hand, win) {
        
        const statusText = document.querySelector('.status_text');
        if(round === 2 && hand) {
            this.display.classList.add('status_display');
            statusText.innerHTML = `win: ${win}`;
        }
        else if (round === 2 && this.accountTotal !== 0) {
            this.display.classList.add('status_display');
            statusText.innerHTML = 'lose';
        }
        else if(round === 2 && this.accountTotal === 0) {  
            this.restartBtn.style.display = 'block';
            this.display.classList.add('status_display');
            statusText.innerHTML = 'bankrupt, retry?';
            this.bankrupt = true;
        }
        if(round === 0) {
            this.display.classList.remove('status_display')
        }
    }

    restart(basicBets) {
        this.currentBet = basicBets[0];
        this.accountTotal = this.accountTotalBase;
        this.display.classList.remove('status_display');
        this.restartBtn.style.display = 'none';
        this.cashTotalDisplay(this.accountTotal);
        this.bankrupt = false;
    }
}   
