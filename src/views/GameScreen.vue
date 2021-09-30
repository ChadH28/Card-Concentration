<template>
  <div class="gameScreen-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2 col-md-2 col-lg-2">
          <div class="card player-card">
            <img
              class="card-img-top img-fluid player-img" 
              src="../assets/spacer1.png"
              alt="player1"
            >
              <div class="card-body">
                <h5 class="card-title">Player 1</h5>
                <h5 class="card-title">Score: 10</h5>
              </div>
          </div>
        </div>
        <div class="col-sm-8 col-md-8 col-lg-8">
          <Game/>
        </div>
        <div class="col-sm-2 col-md-2 col-lg-2">
          <div class="card player-card">
            <img
              class="card-img-top img-fluid player-img"
              src="../assets/spacer2.png"
              alt="player1"
            >
              <div class="card-body">
                <h5 class="card-title">Player 2</h5>
                <h5 class="card-title">Score: 10</h5>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Game from "../components/Game";

export default {
  name: "App",
  components: {
    Game,
  },
};
</script>

<style scoped>

/* .gameScreen-section{
  padding: 10px;
} */

.player-img{
  height: 300px;
}

.player-card{
  margin-top: 200px; 
  padding: 15px;
  border-radius: 8px;
  color: white;
  background-color: rgba(255, 255, 255, 0.35);
}

.card-title{
  font-size: 30px;
  font-weight: bold;
}

</style>
