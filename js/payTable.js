class PayTable {
    constructor(){
            this.table = document.querySelector('.table')
            this.basicBet = [1000, 2000, 3000, 4000, 5000],
  
            this.hands = {
                royalFlush: {handName: "Royal Flush", value: (basicBetValue) => basicBetValue*250},
                starightFlush: {handName: "Straight Flush", value: (basicBetValue) => basicBetValue*50},
                fourOfAkind: {handName: "Four Of a Kind", value: (basicBetValue) => basicBetValue*25},
                fullHouse: {handName: "Full House", value: (basicBetValue) => basicBetValue*9},
                flush: {handName: "Flush", value: (basicBetValue) => basicBetValue*6},
                straight: {handName: "Straight", value: (basicBetValue) => basicBetValue*4},
                threeOfAkind: {handName: "Three Of a Kind", value: (basicBetValue) => basicBetValue*3},
                twoPair: {handName: "Two Pair", value: (basicBetValue) => basicBetValue*2},
                jacksOrBetter: {handName: "Jacks Or Better", value: (basicBetValue) => basicBetValue*1},
            }
    }
    buildTable() {
            const handsValues = Object.values(this.hands)

            handsValues.forEach((element) => {
                
                const row = document.createElement("tr");
                this.table.appendChild(row);
                
                const titleCell = document.createElement("td");
                row.appendChild(titleCell);
                titleCell.classList.add("title_cell")
                titleCell.innerText = element.handName
                
                this.basicBet.forEach((e) => {
                    const cell = document.createElement("td");
                    row.appendChild(cell);
                    cell.innerText = this.convert(element.value(e));
                 })
        })    
    }

    convert(value){
        if(value >= 1000) {
            const num = value/1000;
            return num + '.0 K'
        }
    }

}





