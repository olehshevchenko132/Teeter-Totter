<template>
  <section class="teetleTottle">
    <Swing/>
    <Pillar/>
  </section>
</template>

<script>
import Swing from './Swing.vue';
import Pillar from './Pillar.vue';

export default {
  name: 'TeetleTottle',
  components: {
    Swing,
    Pillar,
  },
};
</script>

<style scoped>
.teetleTottle {
  height: 35%;
  width: 100%;
}
</style>
