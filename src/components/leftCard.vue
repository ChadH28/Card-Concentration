<template>
    <div class="card player-card">
        <img class="card-img-top img-fluid player-img" src="../assets/spacer1.png" alt="player1">
        <div class="card-body">
            <h5 class="card-title">Player 1</h5>
            <h5 class="card-title">Score: {{player1_score}}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'leftCard',
    props: ['player1_score'],

}
</script>

<style scoped>
.player-img {
    height: 300px;
    width: 250px;
    margin: auto;
}

.player-card {
    margin: 100px 0px 15px;
    padding: 10px;
    border-radius: 8px;
    color: white;
    background-color: rgba(255, 255, 255, 0.35);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.card-title {
    font-size: 30px;
    font-weight: bold;
}
</style>
