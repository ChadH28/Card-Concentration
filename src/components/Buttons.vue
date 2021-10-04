<template>
    <section class="button-container">
        <button @click="reset" type="button" class="btn reset">
          <i class="fa fa-repeat"></i>
        </button>
        <router-link type="button" class="btn btn-danger" to="/">
          <i class="fa fa-sign-out"></i>
        </router-link>
    </section>
</template>

<script>
export default {
  name: 'Buttons',
}
</script>

<style scoped>
.button-container {
    margin-top: 10px;
}

.reset {
    background-color: orange;
    color: white;
    margin-right: 8px;
}
</style>
