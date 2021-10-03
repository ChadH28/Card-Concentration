<template>
    <div class="gameScreen-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-2 col-md-2 col-lg-2">
                    <div class="card player-card">
                        <img class="card-img-top img-fluid player-img" src="../assets/spacer1.png" alt="player1">
                        <div class="card-body">
                            <h5 class="card-title">Player 1</h5>
                            <h5 class="card-title">Score: {{player1.score}}</h5>
                        </div>
                    </div>
                    <div>
                        {{player1.turns}}
                    </div>
                </div>
                <div class="col-sm-8 col-md-8 col-lg-8">
                    <div class="game-section">
                        <button @click="reset" type="button" class="btn reset">
                    <i class="fa fa-repeat"></i>
                    </button>
                        <router-link type="button" class="btn btn-danger" to="/">
                            <i class="fa fa-sign-out"></i>
                        </router-link>
    
                        <div class="container">
                            <div class="deck row row-cols-sm-6 row-cols-md-6 row-cols-lg-6">
                                <div class="col" v-for="(card,index) in cards" :key="index" :value="card.value">
                                    <div class="card-content" @click="flipCard(card) && matchCard(card) " :class="{ 'flipped': card.flipped, 'matched': card.matched}">
                                        <div class="card-front">
                                            <!-- background of card image coming soon -->
                                        </div>
                                        <div class="card-back">
                                            <img class="img-fluid card-image" :src="card.image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2 col-md-2 col-lg-2">
                    <div class="card player-card">
                        <img class="card-img-top img-fluid player-img" src="../assets/spacer2.png" alt="player1">
                        <div class="card-body">
                            <h5 class="card-title">Player 2</h5>
                            <h5 class="card-title">Score: {{player2.score}}</h5>
                        </div>
                    </div>
                    <div>
                        {{player2.turns}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "gameScreen",
    data() {
        return {
            player1: {
                score: 0,
            },
            player2: {
                score: 0,
            },
            // Array of stored flipped cards the user selects / later will be used to store the flips player 1 and player 2 chooses
            flippedCards: [],
            // Array of a deck of cards
            cards: [""],
            flipped: false,
            matched: false,
            // turn started at 1 for player1 (so the plan is to increment the turns on each 2nd flip) and then to make player 1 increments odd numbers and player 2 increments even 
            turns: 1
        };
    },
    created() {
        this.getDeck();
        this.reset();
        this.redCards()
    },
    methods: {
        flipCard(card) {   
            card.flipped = true;
            // console.log(card.value, ' OF ', card.suit)
            if (this.flippedCards.length < 2) {
                this.flippedCards.push(card);
                // console.log(this.flippedCards)
            }
            if (this.flippedCards.length === 2) {
                // console.log(
                //     "youve selected 2 cards:",
                //     this.flippedCards[0].value,
                //     this.flippedCards[0].suit,
                //     this.flippedCards[1].value,
                //     this.flippedCards[1].suit
                // );
                this.matchCard();
            }
        },
        redCards() {
          for (let i = 0; i < this.cards.length; i++) {
            console.log(this.cards[i])
            // cards['color'] = 'RED';
            // if(this.cards[i].suit === 'HEARTS') {
            //   // this.cards[i].append({color: 'red'});
            //   console.log(this.cards[i])
            // }
          }
        },
        matchCard() {     
            const turns = this.turns++;
            // const player1 = this.turns++;
            // console.log(this.player1.turns++)
            // console.log(this.player2.turns+2)
            if((turns % 2) != 1) {
              console.log('player 2s turn')
            }
            else {
              console.log('player 1s turn')
            }
            // Currently only matching on values not color
            if (this.flippedCards[0].value === this.flippedCards[1].value) {
              if((turns % 2) != 1) {
                setTimeout(() => {
                    console.log("matched for player 2");
                    this.player2.score++
                    // console.log(this.player2.score++);
                    this.flippedCards.forEach(card => (card.matched = true));
                    this.flippedCards = [];
                }, 600);
              }
              else {
                setTimeout(() => {
                    console.log("matched for player 1");
                    this.player1.score++
                    // console.log(this.player1.score++);
                    this.flippedCards.forEach(card => (card.matched = true));
                    this.flippedCards = [];
                }, 600);
              }
            } else {
                setTimeout(() => {
                    this.flippedCards.forEach(card => (card.flipped = false));
                    // console.log("not matched, flipped");
                    this.flippedCards = [];
                }, 600);
            }
        },
        reset() {
            this.getDeck();
            setTimeout(() => {
                this.flippedCards = [];
            }, 600);
            // alert("Game reseted");
        },
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


<style scoped>
/* .gameScreen-section{
  padding: 10px;
} */

.player-img {
    height: 300px;
}

.player-card {
    margin-top: 200px;
    padding: 15px;
    border-radius: 8px;
    color: white;
    background-color: rgba(255, 255, 255, 0.35);
}

.card-title {
    font-size: 30px;
    font-weight: bold;
}

.game-section {
    justify-content: center;
    align-items: center;
    padding-top: 10px;
}

.reset {
    background-color: orange;
    color: white;
    margin-right: 8px;
}

/*
 * Styles for the deck of cards
 */

.deck {
    align-items: center;
    width: 100%;
    height: auto;
    padding: 20px;
    border-radius: 8px;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background-color: rgba(255, 255, 255, 0.34);
    margin-top: 20px;
    margin-bottom: 20px;
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
    display: none;
}
</style>
