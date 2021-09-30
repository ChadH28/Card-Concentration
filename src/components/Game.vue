<template>
    <div class="game-section">
        <div class="float-right">
            <button
                @click="reset"
                type="button"
                class="btn reset"
            >
                <i class="fa fa-repeat"></i>
                </button>
                <button
                    type="button"
                    class="btn btn-danger"
                >
                    <i class="fa fa-sign-out"></i>
                    </button>
        </div>

        <div class="container">
            <div class="deck row row-cols-sm-6 row-cols-md-6 row-cols-lg-6">
                <div
                    class="col"
                    v-for="(card,index) in cards"
                    :key="index"
                    :value="card.value"
                >
                    <div
                        class="card-content"
                        @click="flipCard(card) && matchCard(card) "
                        :class="{ 'flipped': card.flipped, 'matched': card.matched}"
                    >
                        <div class="card-front">
                            <!-- background of card image coming soon -->
                        </div>
                        <div class="card-back">
                            <img
                                class="img-fluid card-image"
                                :src="card.image"
                            />
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
        score: 0,
      },
      player2: {
        moves: null,
        turn: false,
        score: 0,
      },
      card: null,
      moves: null,
      score: 0,
      // Array of stored flipped cards the user selects / later will be used to store the flips player 1 and player 2 chooses
      flippedCards: [],
      // Array of a deck of cards
      cards: [""],
      flipped: false,
      matched: false,
    };
  },
  created() {
    this.getDeck();
    this.reset();
  },
  methods: {
    flipCard(card) {
      // card.flipped = !card.flipped;
      card.flipped = true;
      // console.log(card.value, ' OF ', card.suit)
      if (this.flippedCards.length < 2) {
        this.flippedCards.push(card);
        // console.log(this.flippedCards)
      }
      if (this.flippedCards.length === 2) {
        console.log(
          "youve selected 2 cards:",
          this.flippedCards[0].value,
          this.flippedCards[0].suit,
          this.flippedCards[1].value,
          this.flippedCards[1].suit
        );
        this.matchCard();
      }
    },
    matchCard() {
      if (this.flippedCards[0].value === this.flippedCards[1].value) {
        setTimeout(() => {
          console.log("matched");
          this.flippedCards.forEach(card => (card.matched = true));
          this.flippedCards = [];
        }, 400);
      } else {
        setTimeout(() => {
          this.flippedCards.forEach(card => (card.flipped = false));
          console.log("not matched, flipped");
          this.flippedCards = [];
        }, 600);
      }
    },
    reset() {
      this.getDeck();
      setTimeout(() => {
        this.flippedCards = [];
      }, 600);
      alert("Game reseted");
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


<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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
  cursor: not-allowed;
}
</style>
