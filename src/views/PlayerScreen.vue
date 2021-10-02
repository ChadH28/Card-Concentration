<template>
    <div class="player-section">
        <div class="container">
            <header class="screen-header">
                <h2>Are you ready to play?</h2>
            </header>
            <div class="row ">
              <!-- {{player1.name}} {{player2.name}} -->
                <div class="col-sm-6 ">
                    <div class="player-container">
                        <div class="card-body image-container">
                            <img class="card-img-top img-fluid player-img" src="../assets/spacer1.png" />
                        </div>
                        <div class="footer">
                            <input type="text" v-model="player1.name" class="form-control" placeholder="Name of player 1" aria-label="player1">
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 ">
                    <div class="player-container">
                        <div class="card-body image-container">
                            <img class="card-img-top img-fluid player-img" src="../assets/spacer2.png" />
                        </div>
                        <div class="footer">
                          
                            <input v-model="player2.name" type="text" class="form-control" placeholder="Name of player 2" aria-label="player2">
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-button">
                <button type="button" @click="toggleModal" class="btn btn-success">Let's Play</button>
            </div>
            <div v-if="showModal">
                <Modal :player1='player1.name' :player2='player2.name' @close='toggleModal' />
            </div>
        </div>
    
    
    
    </div>
</template>

<script>
import Modal from "../components/welcomeModal";

export default {
    name: "App",
    components: {
        Modal
    },
    data() {
        return {
            player1: {
                name: null
            },
            player2: {
                name: null
            },
            showModal: false
        }
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal
        },
    },
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
