<template>
  <div class="container">
    <AppMessage />
    <router-view/>
  </div>
</template>

<script>
import AppMessage from "../components/ui/AppMessage";
import {useStore} from "vuex";

export default {
  name: "AuthLayout",
  components: {AppMessage},
}
</script>

<style scoped>

</style>