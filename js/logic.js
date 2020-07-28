class Logic {
    constructor(){
        this.round = 0;
        this.cardsData = [];
        this.valuesCount = {};
        this.currentHands = [];
        
    }


    roundCount() {
        if(this.round < 2) {this.round++;}
        else this.round = 0;
        //console.log(this.round)
    }

    getRound = () => {
        return this.round;
    }

    //gets data of drawn cards
    getCardsData() {
        const cards = document.getElementsByClassName("card");
        const cardsArray = [...cards];
        const cardsNewValues = []
        cardsArray.forEach((e) => cardsNewValues.push(e.dataset))

        this.cardsData = cardsNewValues;
        //console.log(this.cardsData)
    }

    arrangeCardsData() {
        let values = []; //will store values of drawn cards
        let hands = [];
        this.valuesCount = {}; //will store amount of each drawn card

        //arrange values and suits in arrays
        this.cardsData.forEach((e) => values.push(e.value)); //pushes suits of drawn cards to "values" array

        //counts the amount of same cards values and puts them in Logic.valuesCount
        values.forEach((e) => {
            let count = 0;
            values.forEach((value) => {
                if(value==e) {count++}
            })
            this.valuesCount[e] = count;    
        })
       // console.log(this.valuesCount)
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
            this.currentHands.push("flusch")
        }

        
    }

    winningHand() {
        console.log(this.currentHands);

        if(this.currentHands.length == 1 && this.currentHands[0] != "pair") console.log(this.currentHands[0]);
       
        if(this.currentHands.length > 1) { 
    
            this.currentHands.map(() => {
                if(this.currentHands.includes("jacksOrBetter")) {
                    let jacksIndex = this.currentHands.indexOf("jacksOrBetter");
                    this.currentHands[jacksIndex] = "pair"   
                }
            });
  
           if(this.currentHands.every((e) => e == "pair")) {console.log("twoPairs")};
           if(this.currentHands.includes("pair") && this.currentHands.includes("threeOfAkind")) {console.log("fullHouse")}
            
        }
    }


}

