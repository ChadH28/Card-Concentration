<template>
    <div class="game-section">
        <header>
            <h1>Card Concentration</h1>
            <div class="float-right">
                <button type="button" class="btn reset">
                              <i class="fa fa-repeat"></i>
                              </button>
                <button type="button" class="btn btn-danger">
                                <i class="fa fa-sign-out"></i>
                                </button>
            </div>
        </header>
    
        <section class="score-panel">
    
            <span class="moves">0 Moves</span>
    
        </section>
    
        <div div class="container">
            <div class="deck row row-cols-6 row-cols-md-6 row-cols-lg-6">
                <div class="col" v-for="(card,index) in cards" :key="index" :value="card.value">
                    <div class="card-content" @click="flipCard(card) && matchCard(card) " :class="{ 'flipped': card.flipped, 'matched': card.matched}">
                        <div class="card-front" v-if="visible">
                            <!-- background of card image coming soon -->
                            fr
                        </div>
                        <div v-else class="card-back">
                            <img class="img-fluid card-image" :src="card.image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Concentration",
    data() {
        return {
            player1: {
                moves: null,
                turn: false,
                score: 0
            },
            player2: {
                moves: null,
                turn: false,
                score: 0
            },
            card: null,
            moves: null,
            score: 0,
            // Array of stored flipped cards the user selects / later will be used to store the flips player 1 and player 2 chooses
            flippedCards: [],
            // Array of a deck of cards
            cards: [""],
            visible: false,
            flipped: false
        };
    },
    created() {
        this.getDeck();
    },
    methods: {
        flipCard(card) {
            // card.flipped = !card.flipped;
            card.flipped = true;
            console.log(card.value, ' OF ', card.suit)

            if (this.flippedCards.length < 2) {
                this.flippedCards.push(card);
                // console.log(this.flippedCards)
            }
            if (this.flippedCards.length === 2) {
                console.log('youve selected 2 cards:', this.flippedCards[0].value, this.flippedCards[0].suit, this.flippedCards[1].value, this.flippedCards[1].suit);
                    if (this.flippedCards[0].value === this.flippedCards[1].value) {
                        console.log("matched")
                        // this.flippedCards.forEach(card => card.matched = true);
                    } else {
                        // this.flippedCards.forEach(card => card.flipped = false);
                        console.log("not matched, flipped")
                    }
                    this.flippedCards = [];
            }

        },
        // matchCard(card) {
        //     card.matched = false;
        //     if (this.flippedCards[0].value === this.flippedCards[1].value) {
        //         this.flippedCards.forEach(card => card.matched = true);
        //     }
        //     else {
        //         this.flippedCards.forEach(card => card.flipped = false);
        //     }
        //     this.flippedCards = [];
        // },
        // getting deck of cards images from the deckofcardsapi
        getDeck() {
            const url =
                "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
            fetch(url, {
                    mode: "cors", //if FE and BE are on different hosts/url
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then(response => response.json())
                .then(json => {
                    //API response gets returned
                    // console.log(json);
                    // console.log(json.deck_id);
                    const deckID = json.deck_id;
                    const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=52`;
                    fetch(url, {
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })
                        .then(response => response.json())
                        .then(json => {
                            // console.log(json.cards)
                            this.cards = json.cards;
                        });
                });
        },
    },
};
</script>


<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 60px;
}

h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    color: white;
}

.reset {
    background-color: orange;
    color: white;
    margin-right: 5px;
}

/*
 * Styles for the Score Panel
 */

.score-panel {
    text-align: center;
    width: 660px;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 10px;
}

.score-panel {
    float: left;
    margin: 0;
    padding: 0;
    display: inline-block;
    margin: 0 5px 0 0;
}

.score-panel {
    list-style: none;
    display: inline-block;
}

.moves {
    padding-left: 5px;
    float: left;
}

/*
 * Styles for the deck of cards
 */

.deck {
    align-items: center;
    width: 670px;
    min-height: 680px;
    padding: 32px;
    border-radius: 8px;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background-color: rgba(255, 255, 255, 0.4);
    margin: 20px auto;
}

.card-image {
    background: linear-gradient(160deg, #3c384d 0%, #ffffff 450%);
    border-radius: 6px;
    border: white 3px solid;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    animation: flash-light-gry 0.3s;
}

.card-content {
    margin-bottom: 12px;
    cursor: pointer;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card-front,
.card-back {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.card-back {
    transform: rotateY(180deg);
}

.flipped {
    transform: rotateY(180deg);
}

.matched {
    opacity: 0.5;
}
</style>
