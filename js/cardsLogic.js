class CardsLogic {
    constructor(){
        this.round = 0;
        this.cardsData = [];
        this.valuesCount = {};
        this.currentHands = [];
        this.values = [];
    }


    roundCount() {    
        if(this.round < 2) {this.round++;}
        else {
            this.round = 0;
        }
        console.log()
    }

    roundReset() {
        this.round = 0
    }


    getCardsData() {
        const cards = document.getElementsByClassName("card");
        const cardsArray = [...cards];
        const cardsNewValues = []
        cardsArray.forEach((e) => cardsNewValues.push(e.dataset))

        this.cardsData = cardsNewValues;
        //console.log(this.cardsData)
    }

    arrangeCardsData() {
        this.values = []; //will store values of drawn cards

        this.valuesCount = {}; //will store amount of each drawn card

        //arrange values and suits in arrays
        this.cardsData.forEach((e) => this.values.push(parseInt(e.value))); //pushes suits of drawn cards to "values" array
        this.values.sort(function(a, b){return a-b}) 
       // console.log(this.values)
        //counts the amount of same cards values and puts them in Logic.valuesCount
        this.values.forEach((e) => {
            let count = 0;
            this.values.forEach((value) => {
                if(value==e) {count++}
            })
            this.valuesCount[e] = count;    
        })
        //console.log(this.valuesCount)
    }


    findBasicHands() {
        const valuesCountEntries = Object.entries(this.valuesCount); //turns Logic.valuesCount to array
        const valuesCountValues = Object.values(this.valuesCount);
        this.currentHands = [];

        valuesCountEntries.forEach((e) => {  
            if(e[1] == 2 && parseInt(e[0]) > 10) this.currentHands.push("jacksOrBetter")
            if(e[1] == 2 && parseInt(e[0]) < 11) this.currentHands.push("pair")
            if(e[1] == 3) this.currentHands.push("threeOfAkind")
            if(e[1] == 4) this.currentHands.push("fourOfAkind")
        })

        //check cards suits for flush
        let suits = []; 
        this.cardsData.forEach((e) => suits.push(e.suit));

        if(suits.every((e) => e==suits[0])) {
            this.currentHands.push("flush")
        }

        //check for straight

        let straightCheck = [];
        this.values.forEach((e, i) => {    
            if(i > 0) {
                if((this.values[i] - this.values[i-1] === 1)) {
                    straightCheck.push("straight");
                }
            }        
        })
        if(straightCheck.length === 4) {
            this.currentHands.push("straight")
        }
        if(straightCheck.length === 4 && this.values[0] === 10 && this.currentHands.includes("flush")) {
            this.currentHands.push("royalFlush")
        }
        // console.log(this.currentHands)
    }

    winningHand() {
        let winningHand;
        // console.log(this.currentHands);

        if(this.currentHands.length == 1 && this.currentHands[0] != "pair") winningHand = this.currentHands[0];
       
        if(this.currentHands.length > 1) { 
    
            this.currentHands.map(() => {
                if(this.currentHands.includes("jacksOrBetter")) {
                    let jacksIndex = this.currentHands.indexOf("jacksOrBetter");
                    this.currentHands[jacksIndex] = "pair"   
                }
            });
  
           if(this.currentHands.every((e) => e == "pair")) winningHand = "twoPairs";
           if(this.currentHands.includes("pair") && this.currentHands.includes("threeOfAkind")) winningHand = "fullHouse";
           if(this.currentHands.includes("straight") && this.currentHands.includes("flush")) winningHand = "straightFlush";
           if(this.currentHands.includes("royalFlush")) winningHand = "royalFlush";
           if(this.currentHands.includes("fourOfAkind")) winningHand = "fourOfAkind";
            
        }
        // console.log(winningHand)
        return winningHand
    }


}

