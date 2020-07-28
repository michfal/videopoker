class CardsDisplay {
    constructor() {
        this.drawBtn = document.querySelector(".draw");
        this.cardTable = document.querySelector(".cardTable")
        this.cardsSuitsSVG = {
            clubs: `<g transform="translate(55 70) scale(1.5)" style="stroke: none"><path d="M14.171 22.31a14.712 14.712 0 01-1.602-6.698c0-8.165 6.628-14.793 14.793-14.793 8.164 0 14.793 6.628 14.793 14.793 0 2.379-.563 4.628-1.563 6.62 7.749.464 13.899 6.903 13.899 14.767 0 8.164-6.629 14.793-14.793 14.793a14.72 14.72 0 01-7.968-2.33l8.153 12.06a1.46 1.46 0 01-1.21 2.279H16.05a1.46 1.46 0 01-1.21-2.279L22.9 49.6a14.719 14.719 0 01-7.876 2.272C6.859 51.872.231 45.243.231 37.079c0-7.878 6.171-14.326 13.94-14.769z"/></g>`,
            
            diamonds: `<g transform="translate(55 70) scale(1.5)" style="stroke: none"><path d="M26.326 3.787a3.597 3.597 0 015.345 0l23.523 26.126a3.597 3.597 0 010 4.812L31.67 60.85a3.597 3.597 0 01-5.345 0L2.803 34.725a3.597 3.597 0 010-4.812L26.326 3.787z" fill="#cf381d"/></g>`,
            
            hearts: `<g transform="translate(55 70) scale(1.5)" style="stroke: none"><path d="M29.069 5.114A14.744 14.744 0 0139.567.739c8.164 0 14.793 6.628 14.793 14.793 0 2.929-.853 5.661-2.324 7.959h.039L28.928 61.056a2 2 0 01-3.405 0L2.436 23.588A14.716 14.716 0 01.1 15.612C.1 7.447 6.729.819 14.893.819c5.123 0 9.642 2.61 12.297 6.571a14.87 14.87 0 011.879-2.276z" fill="#cf381d"/></g>`,
            
            spades: `<g transform="translate(55 70) scale(1.5)" style="stroke: none"><path d="M3.87 30.507L25.899 1.683a2 2 0 013.178 0l21.637 28.312a14.742 14.742 0 013.899 10.004c0 8.164-6.629 14.793-14.793 14.793-2.003 0-3.913-.399-5.656-1.122l5.691 7.81a1.46 1.46 0 01-1.181 2.321H16.293a1.462 1.462 0 01-1.18-2.321l5.608-7.696a14.745 14.745 0 01-5.575 1.088C6.982 54.872.353 48.243.353 40.079c0-2.93.853-5.661 2.325-7.96h-.04l.295-.386c.291-.425.604-.834.937-1.226z"/></g>`,    
        }    
        this.cardsContainers = document.getElementsByClassName("card");
    }
    
    generateRandomIndexes() {
        let randomIndexes = []
        while(randomIndexes.length < 5){
            let randomIndex = Math.floor(Math.random() * 52);
            if(randomIndexes.indexOf(randomIndex) === -1) randomIndexes.push(randomIndex);
        }
        return randomIndexes
    }

    pickCardForContainer(round) {
        
        this.randomIndexes = this.generateRandomIndexes();
        [...cardsDisplay.cardsContainers].map((container, i) => {
            if(!container.classList.contains("card_selected")){ 
                let randomCardIndex = this.randomIndexes[i]
                this.createCardSVG(deckArray.cards[randomCardIndex], container, round)
            }               
        })

    }
    
    createCardSVG(cardObject, container, round) {
        
        const suit = cardObject.suit;
        const rank = cardObject.rank;
        const value = cardObject.value;
        let content = '';

        // if(round == 0) {
        //     content = `<svg width="150" height="185" viewBox="0 0 150 185">
        //     <rect x="3" y="3" rx="20" ry="20" width="145" height="180" style="fill: white;"/>
        //         <rect x="3" y="3" rx="15" ry="15" width="125" height="160" transform="translate(10, 10)" style="fill: #6FB567;"/>
        //     </svg>`
        // } else {
        //     content = `<svg width="150" height="185" viewBox="0 0 150 185">
        //     <rect x="3" y="3" rx="20" ry="20" width="145" height="180" style="fill: white;"/>
        //     ${cardsDisplay.cardsSuitsSVG[suit]}
        //     <text x="15" y="50" class="rank" style="stroke: none">${rank}<text>
        //     </svg>`
        // }
    
        content = `<svg width="150" height="185" viewBox="0 0 150 185">
             <rect x="3" y="3" rx="20" ry="20" width="145" height="180" style="fill: white;"/>
             ${cardsDisplay.cardsSuitsSVG[suit]}
             <text x="15" y="50" class="rank" style="stroke: none">${rank}<text>
             </svg>`
        
        container.innerHTML = content;
        container.dataset.suit = suit;
        // container.dataset.rank = rank;
        container.dataset.value = value;
    }
}


// const deckArray = new Deck();
// deckArray.createDeck();

