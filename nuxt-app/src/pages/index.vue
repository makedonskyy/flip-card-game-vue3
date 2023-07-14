<template>
  <div class="h-full">
    <section class="py-10">
      <BoardGame />
    </section>
  </div>
</template>

<script>

import BoardGame from '~/components/BoardGame.vue'

export default {
  name: 'Index',
  components: { BoardGame }
}
</script>

<style scoped>

</style>
