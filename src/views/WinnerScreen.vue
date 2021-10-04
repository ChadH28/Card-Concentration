<template>
    <div class="winner-section">
        <header>
            <h3>Well Done</h3>
            <h2>Player</h2>
        </header>
        <div class="container">
            <div class="card">
                <img class="card-img-top" src="../assets/spacer3.png" alt="player-winner">
                <div class="card-body">
                    <div class="card">
                        <div class="row">
                            <div class="col-sm-3">
                                <img src="../assets/spacer1.png" alt="">
                            </div>
                            <div class="col-sm-3">
                                1<sup>st</sup> Place
                            </div>
                            <div class="col-sm-3">
                                Player 1
                            </div>
                            <div class="col-sm-3">
                                Score:
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="row">
                            <div class="col-sm-3">
                                <img src="../assets/spacer1.png" alt="">
                            </div>
                            <div class="col-sm-3">
                                2<sup>nd</sup> Place
                            </div>
                            <div class="col-sm-3">
                                Player 2
                            </div>
                            <div class="col-sm-3">
                                Score:
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-success">PLAY AGAIN</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "winnerScreen",
    components: {

    },
    data() {
        return {

        }
    },
};
</script>

<style scoped>

</style>
