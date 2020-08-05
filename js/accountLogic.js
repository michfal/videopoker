class AccountLogic{
    constructor(){
        this.setBet = document.querySelector('.bet');
        this.currentBet = [];
        this.betIndex = 0;
    }

    bet(e, basicBets){
        const target = e.target;
        if(target.classList.contains('bet_btn')){
            // this.currentBet = basicBets[0]
            // console.log(this.currentBet)
            if(target.classList.contains('bet_one')) {
                if(this.betIndex < basicBets.length)this.betIndex++;
                console.log(basicBets[this.betIndex])
            }
            if(target.classList.contains('bet_max')) {
                this.betIndex = basicBets.length - 1;
                console.log(basicBets[this.betIndex])
            }
        }
    }
    displayBet(e, basicBets) {
        if(target.classList.contains('cash_value')) {
            target.innerHtml = basicBets[this.betIndex]
        }
    }

}

