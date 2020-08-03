class AccountLogic{
    constructor(){
        this.setBet = document.querySelector('.bet');
        this.currentBet = [];
    }

    bet(e, basicBets){
        const target = e.target;
        if(target.classList.contains('bet_btn')){
            this.currentBet = basicBets[0]
            console.log(this.currentBet)
            if(target.classList.contains('bet_one')) console.log(this.currentBet)
            if(target.classList.contains('bet_max')) console.log("bet max")
        }
        
    }

}

