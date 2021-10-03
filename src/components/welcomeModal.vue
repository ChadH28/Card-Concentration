<template>
    <div class="modal-section">
        <div class="welcome-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Welcome</h3>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-6">
                                <h4>Player 1: {{player1}}</h4>
                            </div>
                            <div class="col-sm-6">
                                <h4>Player 2: {{player2}}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" @click="toggleClose()">Close</button>
                        <router-link type="button" class="btn" to="/game">Play</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "modal",
    props: ['player1', 'player2'],
    // data() {
    //     return {
    //         player1: {
    //             name: "Ronal"
    //         },
    //         player2: {
    //             name: "gillian"
    //         },
    //     }
    // },
    methods: {
        toggleClose() {
            this.$emit('close')
        }
    },
};
</script>


<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome-modal {
    position: fixed;
    /* making it centred */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    overflow: hidden;
    outline: 0;
    /* backdrop -- generated from glassmorphism*/
    -webkit-backdrop-filter: blur(22px) saturate(180%);
    background-color: rgba(74, 144, 226, 0.72);
}

.modal-header,
.modal-footer {
    border: none;
}

.modal-header {
    margin: auto;
}

.modal-content {
    -webkit-backdrop-filter: blur(22px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.72);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>

 
 
 
 
 
 
 
 
 
