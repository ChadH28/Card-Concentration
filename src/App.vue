<template>
  <div>
    <header>
      <h1>Card Concentration</h1>
    </header>
    <router-view/>
    <!-- <GameScreen/> -->
  </div>
</template>

<script>
// import Game from "./components/Game.vue";
// import GameScreen from "./views/GameScreen";

export default {
  name: "App",
  components: {
    // GameScreen
  },
};
</script>

<style>

h1 {
  padding-top: 30px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: linear-gradient(160deg, #3de9db 0%, #1330d3d0 100%);
   height: 100%;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
