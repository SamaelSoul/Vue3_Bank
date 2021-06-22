<template>
  <div class="card">
    <h1 class="card-title">{{title}}</h1>
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    document.title = `${props.title} | Система приема кредитных заявок`
  }
}
</script>

<style scoped>
</style>