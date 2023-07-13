<template>
  <div>
    <h1>Flip and remind</h1>
    <section>
      <Board />
    </section>
  </div>
</template>

<script>
import Board from '~/components/Board.vue'

export default {
  name: 'Index',
  components: { Board }
}
</script>

<style scoped>

</style>
