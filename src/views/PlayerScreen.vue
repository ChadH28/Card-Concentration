<template>
  <div class="player-section">
    <div class="container">
      <header>
        Are you ready to play?
      </header>
      <div class="row">
        <div class="col-sm-6">
          <div class="card mb-3">
            <div class="card-body">
              <img class="img-fluid" src="../assets/spacer1.png"/>
            </div>
            <div class="card-footer bg-transparent">
              <input type="text" class="form-control" placeholder="player1" aria-label="player1">
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card mb-3">
            <div class="card-body">
              <img class="img-fluid" src="../assets/spacer2.png"/>
            </div>
            <div class="card-footer bg-transparent">
              <input type="text" class="form-control" placeholder="player1" aria-label="player1">
            </div>
          </div>
        </div>
      </div>
      <button>Let's Play</button>
    </div>

  </div>
</template>

<script>
// import Game from "./components/Game.vue";

export default {
  name: "App",
  components: {},
};
</script>

<style>
</style>
