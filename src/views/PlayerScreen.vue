<template>
  <div class="player-section">
    <div class="container">
      <header class="screen-header">
        <h2>Are you ready to play?</h2>
      </header>
      <div class="row ">
        <div class="col-sm-6 ">
          <div class="player-container">
            <div class="card-body image-container">
              <img
                class="card-img-top img-fluid player-img"
                src="../assets/spacer1.png"
              />
            </div>
            <div class="footer">
              <input
                type="text"
                class="form-control"
                placeholder="Name of player 1"
                aria-label="player1"
              >
            </div>
          </div>
        </div>
        <div class="col-sm-6 ">
          <div class="player-container">
            <div class="card-body image-container">
              <img
                class="card-img-top img-fluid player-img"
                src="../assets/spacer2.png"
              />
            </div>
            <div class="footer">
              <input
                type="text"
                class="form-control"
                placeholder="Name of player 2"
                aria-label="player1"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="section-button">
        <router-link
          type="button"
          class="btn btn-success"
          data-toggle="modal"
          data-target="#player"
          to="/game"
        >Let's Play</router-link>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="player"
      tabindex="-1"
      role="dialog"
      aria-labelledby="player-text"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="exampleModalLongTitle"
            >Modal title</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
                </button>
          </div>
          <div class="modal-body">
            kokoko
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >Close</button>
              <button
                type="button"
                class="btn btn-primary"
              >Save changes</button>
          </div>
        </div>
  </div>
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

<style scoped>
.player-container {
  width: 450px;
}

.footer {
  margin-bottom: 25px;
}

.player-img {
  height: 400px;
  width: 350px;
}

.image-container {
  height: auto;
}

.player-section {
  margin: auto;
  align-items: center;
  padding-top: 10px;
}

.section-button {
  margin: auto;
}

.player-container {
  margin: auto;
}

.screen-header {
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: white;
}

.btn {
  width: 150px;
  padding: 10px;
}
</style>
