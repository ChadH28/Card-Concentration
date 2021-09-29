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
                <!-- v-if="card.value1 === card.value2 && card.suit('DAIMOND') === card.suit('HEARTS') && card.suit('CLUB') === card.suit('SPADE')" -->
                <div class="col" v-for="(card,index) in cards" :key="index" :value="card.value" @click="toggleAlert()">
                    <div class="card-content" @click="toggleFlip()" :class="{ flipped: isActive}">
                        <div class="card-front">
    
                        </div>
                        <div class="card-back">
                            <img class="img-fluid card-image" :src="card.image" />
                            <p>{{ card.value}}</p>
                            <p>{{ card.suit }}</p>
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
            player1: null,
            player2: null,
            card: null,
            moves: null,
            cards: [""],
            isActive: false,
        };
    },
    created() {
        this.getDeck();
    },
    methods: {
        toggleAlert() {
            alert("selected", this.cards)
        },
        toggleFlip() {
            this.isActive = !this.isActive;
            console.log(this.cards.value)
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


<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    margin-bottom: 10px;
    background: linear-gradient(160deg, #3c384d 0%, #ffffff 450%);
    border-radius: 6px;
    border: white 3px solid;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    animation: flash-light-gry 0.3s;
}

.card-content {
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

</style>
